const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Demanda = sequelize.define('Demanda', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  area: {
    type: DataTypes.STRING,
    allowNull: false
  },
  campus: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT
  },
  itens: {
    type: DataTypes.TEXT
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'aberta'
  }
})

module.exports = Demanda