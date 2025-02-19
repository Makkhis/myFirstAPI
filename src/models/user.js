const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

// Sincroniza el modelo con la base de datos
sequelize.sync();

module.exports = User;
