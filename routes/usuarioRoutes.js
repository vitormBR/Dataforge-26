const express = require('express')

const router = express.Router()

const {
    listar,
    cadastrar,
    criar,
    editar,
    atualizar,
    deletar
} = require('../controllers/usuarioController');

router.get('/', listar);

router.get('/novo', cadastrar);

router.post('/criar', criar);

router.get('/editar/:id', editar);

router.post('/atualizar/:id', atualizar);

router.post('/deletar/:id', deletar);

module.exports = router;