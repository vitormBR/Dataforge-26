const Usuario = require('../models/Usuario');

// Listar todos os usuários
const listar = async (req, res) => {

    const usuarios = await Usuario.findAll({
        raw: true
    })

    res.render('listarUsuarios', { usuarios })

};

// Mostrar formulário de cadastro
const cadastrar = (req, res) => {

    res.render('cadastrarUsuario')

};

// Criar usuário
const criar = async (req, res) => {

    const { nome, email, senha, matricula, campus } = req.body

    await Usuario.create({
        nome,
        email,
        senha,
        matricula,
        campus
    })

    res.redirect('/')

};

// Mostrar formulário de edição
const editar = async (req, res) => {

    const usuario = await Usuario.findByPk(req.params.id)

    res.render('editarUsuario', {
        usuario: usuario.toJSON()
    })

};

// Atualizar usuário
const atualizar = async (req, res) => {

    const { nome, email, senha, matricula, campus } = req.body

    await Usuario.update(
        {
            nome,
            email,
            senha,
            matricula,
            campus
        },
        {
            where: {
                id: req.params.id
            }
        }
    )

    res.redirect('/')

};

// Excluir usuário
const deletar = async (req, res) => {

    await Usuario.destroy({
        where: {
            id: req.params.id
        }
    })

    res.redirect('/')

};

module.exports = {
    listar,
    cadastrar,
    criar,
    editar,
    atualizar,
    deletar
};