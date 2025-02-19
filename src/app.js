// Importamos express  
//codigo para el uso de awilix y sequelize
const express = require("express");
const container = require("./container");

const app = express();
app.use(express.json()); // Middleware para JSON

//servicio Hello World
app.get("/HelloWorld", (req, res) => {
    res.json({ message: "Hello World" });
});

//aptm install curl

//Servicio suma
app.get("/sumap", (req, res) => {
    const { numbers } = req.query; // Recibe los números en la misma url `?numbers=1,2,3`
    if (!numbers) {
        return res.status(400).json({ error: 'You have to add the values for function' });
    }

    //divide los numeros que recibe 1,2,3 a "1", "2", "3"
    const numsArray = numbers.split(',').map(Number);
    if (numsArray.some(isNaN)) {
        return res.status(400).json({ error: 'All values have to be integers' });
    }

    const total = numsArray.reduce((acc, num) => acc + num, 0);
    res.json({ total });
});

app.use(express.json()); // Middleware para interpretar JSON en el body


//Servicio login (no olvidar cambiar al metodo POST)
app.post('/login', (req, res) => { //request, response
    const { user, password } = req.body; //variables que se tienen que agregar en el body/raw

    if (!user || !password) {
        return res.status(400).json({ error: 'Missing username or password' });
    }

    res.json({ message: 'Succesful login', user, password });
});


//Servicio suma basica

app.get("/sumeasy", (req, res) => {
    const num1 = 5;
    const num2 = 2;
    const result = num1 + num2;

    res.json({message: 'La suma de:',num1, num2, result});
});




/*
app.get("/saludar", (req, res) =>{
    const salu = (namee = "Marco") = ("hola, ", namee);

    res.json({salu});

});
*/

//servicio awilix y sequelize 

const userService = container.resolve('userService');

// Ruta para crear un usuario
app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    const user = await userService.createUser(name, email);
    res.json(user);
});

// Ruta para obtener todos los usuarios
app.get('/users', async (req, res) => {
    const users = await userService.getUsers();
    res.json(users);
});



// Exportamos la app  
module.exports = app;  
