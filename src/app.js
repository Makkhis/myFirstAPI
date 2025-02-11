// Importamos express  
const express = require("express");
const app = express();


//servicio Hello World
app.get("/HelloWorld", (req, res) => {
    res.json({ message: "Hello World" });
});


//Servicio suma
app.get("/sum", (req, res) => {
    const { numbers } = req.query; // Recibe los números en la misma url `?numbers=1,2,3`
    if (!numbers) {
        return res.status(400).json({ error: 'You have to add the values for function' });
    }

    //si no se cumple con que los numeros sean integers
    const numsArray = numbers.split(',').map(Number);
    if (numsArray.some(isNaN)) {
        return res.status(400).json({ error: 'All values have to be integers' });
    }

    const total = numsArray.reduce((acc, num) => acc + num, 0);
    res.json({ total });
});

app.use(express.json()); // Middleware para interpretar JSON en el body


//Servicio login (no olvidar cambiar al metodo POST)
app.post('/login', (req, res) => {
    const { user, password } = req.body;

    if (!user || !password) {
        return res.status(400).json({ error: 'Missing username or password' });
    }

    res.json({ message: 'Succesful login', user, password });
});




// Exportamos la app  
module.exports = app;  
