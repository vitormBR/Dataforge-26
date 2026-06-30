const Demanda = require('../models/demanda')

// Listar todas as demandas
const listar = async (req, res) => {
  const { area, busca } = req.query
  const where = {}

  if (area) where.area = area
  if (busca) where.titulo = { [require('sequelize').Op.like]: `%${busca}%` }

  const demandas = await Demanda.findAll({ where, raw: true })
  res.render('demandas/index', { demandas })
}

// Mostrar formulário de nova demanda
const novaDemanda = (req, res) => {
  res.render('demandas/nova')
}

// Criar demanda
const criar = async (req, res) => {
  const { titulo, area, campus, descricao, itens } = req.body
  await Demanda.create({ titulo, area, campus, descricao, itens })
  res.redirect('/demandas')
}

// Mostrar formulário de editar
const editar = async (req, res) => {
  const demanda = await Demanda.findByPk(req.params.id)
  res.render('demandas/editar', { demanda: demanda.toJSON() })
}

// Atualizar demanda
const atualizar = async (req, res) => {
  const { titulo, area, campus, descricao, itens, status } = req.body
  await Demanda.update({ titulo, area, campus, descricao, itens, status }, { where: { id: req.params.id } })
  res.redirect('/demandas')
}

// Deletar demanda
const deletar = async (req, res) => {
  await Demanda.destroy({ where: { id: req.params.id } })
  res.redirect('/demandas')
}

module.exports = { listar, novaDemanda, criar, editar, atualizar, deletar }