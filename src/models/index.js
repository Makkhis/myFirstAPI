const { Sequelize } = require('sequelize');

// Configuración de Sequelize con SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite' // Archivo donde se guardará la DB
});

module.exports = { sequelize };

