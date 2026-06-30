const express = require('express')
const router = express.Router()
const { listar, novaDemanda, criar, editar, atualizar, deletar } = require('../controllers/demandaController')

router.get('/', listar)
router.get('/nova', novaDemanda)
router.post('/criar', criar)
router.get('/editar/:id', editar)
router.post('/atualizar/:id', atualizar)
router.post('/deletar/:id', deletar)

module.exports = router