const express = require('express')
const { engine } = require('express-handlebars')
const path = require('path')
const sequelize = require('./config/db')

const app = express()

// Configurar Handlebars
app.engine('handlebars', engine({
  helpers: {
    eq: (a, b) => a === b
  }
}))
app.set('view engine', 'handlebars')
app.set('views', './views')

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

// Sincronizar banco de dados
sequelize.sync({ force: false }).then(() => {
  console.log('Banco de dados sincronizado!')
})

const demandasRoutes = require('./routes/demandas')
app.use('/demandas', demandasRoutes)

app.get('/', (req, res) => {
  res.redirect('/demandas')
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})