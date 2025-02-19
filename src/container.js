const { createContainer, asClass, asValue } = require('awilix');
const UserService = require('./services/userService');
const User = require('./models/user');

const container = createContainer();

// Registramos el modelo y servicio en Awilix
container.register({
    userModel: asValue(User),
    userService: asClass(UserService).singleton()
});

module.exports = container;

