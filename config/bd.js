const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(        
    {
        database: 'demandas_materiais', 
        username: 'root',              
        password: '1234',    
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;

