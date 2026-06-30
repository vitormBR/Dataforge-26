const express = require('express')
const router = express.Router()

const contatoController = require('../controllers/contatoController')

// Listar contatos
router.get('/', contatoController.listar)

// Formulário para novo contato
router.get('/novo', contatoController.novoContato)

// Criar contato
router.post('/criar', contatoController.criar)

// Formulário para editar
router.get('/editar/:id', contatoController.editar)

// Atualizar contato
router.post('/atualizar/:id', contatoController.atualizar)

// Excluir contato
router.post('/deletar/:id', contatoController.deletar)

module.exports = router
