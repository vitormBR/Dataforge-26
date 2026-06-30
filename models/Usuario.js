const { DataTypes } = require('sequelize');
const sequelize = require('../config/bd');

const Usuario = sequelize.define('Usuario', {

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },

    matricula: {
        type: DataTypes.STRING,
        allowNull: false
    },

    campus: {
        type: DataTypes.STRING,
        allowNull: false
    }

},
    {
        tableName: 'Usuario',
        timestamps: false
    }
);

module.exports = Usuario;