const express = require('express')
const { engine } = require('express-handlebars')
const path = require('path')
const sequelize = require('./config/db')

const app = express()

// Receber dados dos formulários
app.use(express.urlencoded({ extended: true }));

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

// Conectar ao banco
async function conectarComBanco() {


    try {
        await sequelize.sync()
        console.log('Conexão com o banco estabelecida com sucesso!')
    } catch (erro) {
        console.error('Erro ao conectar com o banco:', erro)
    }
};
conectarComBanco();

// Rotas
const demandasRoutes = require('./routes/demandas')
const contatoRoutes = require('./routes/contatoRoutes')

app.use('/demandas', demandasRoutes)
app.use('/contatos', contatoRoutes)

const usuarioRoutes = require('./routes/usuarioRoutes');
app.use('/usuarios', usuarioRoutes);


app.get('/', (req, res) => {
  res.redirect('/usuarios')
})



app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})
