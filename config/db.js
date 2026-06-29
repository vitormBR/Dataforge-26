const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('gestao_materiais', 'root', 'root123', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize

