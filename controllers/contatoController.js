const Contato = require('../models/Contato')

// Listar todos os contatos
const listar = async (req, res) => {
  const { pesquisa } = req.query
  const where = {}

  if (pesquisa) {
    where.campus = {
      [require('sequelize').Op.like]: `%${pesquisa}%`
    }
  }

  const contatos = await Contato.findAll({
    where,
    raw: true
  })

  res.render('contatos/index', {
    contatos,
    pesquisa
  })
}


// Mostrar formulário de novo contato
const novoContato = (req, res) => {
  res.render('contatos/novo')
}

// Criar contato
const criar = async (req, res) => {
  const { campus, telefone, email } = req.body

  await Contato.create({
    campus,
    telefone,
    email
  })

  res.redirect('/contatos')
}

// Mostrar formulário de edição
const editar = async (req, res) => {
  const contato = await Contato.findByPk(req.params.id)

  if (!contato) {
    return res.redirect('/contatos')
  }

  res.render('contatos/editar', {
    contato: contato.toJSON()
  })
}

// Atualizar contato
const atualizar = async (req, res) => {
  const { campus, telefone, email } = req.body

  await Contato.update(
    { campus, telefone, email },
    { where: { id: req.params.id } }
  )

  res.redirect('/contatos')
}

// Excluir contato
const deletar = async (req, res) => {
  await Contato.destroy({
    where: { id: req.params.id }
  })

  res.redirect('/contatos')
}

module.exports = {
  listar,
  novoContato,
  criar,
  editar,
  atualizar,
  deletar
}
