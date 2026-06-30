const express = require('express');
const exphbs = require('express-handlebars');

const sequelize = require('./config/bd');

const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

// Receber dados dos formulários
app.use(express.urlencoded({ extended: true }));

// Configuração do Handlebars
app.engine('handlebars', exphbs.engine({
    defaultLayout: false
}));

app.set('view engine', 'handlebars');

// Rotas
app.use('/', usuarioRoutes);

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


app.listen(3000, () => {
    console.log('Servidor em execução na porta 3000')
});