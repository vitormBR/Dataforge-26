const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Contato = sequelize.define('Contato', {
  campus: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Contato
