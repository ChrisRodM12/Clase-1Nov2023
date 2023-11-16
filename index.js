// Librerías externas
require('dotenv').config()
const express = require('express');

// Módulos internos
const { readFile, writeFile } = require('./src/files');
const pets_api = require('./src/routes/pets_api');
const petsp = require('./src/routes/pets');
const authRouter = require('./src/routes/user.routes');

const app = express();
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'My App';
const FILE_NAME = './db/pets.txt';

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Usar el motor de plantillas de EJS
app.set('views', './src/views');
app.set('view engine', 'ejs');

//Rutas DE PRUEBA
app.get('/hola/:name', (req, res) => {
    console.log(req);
    const name = req.params.name;
    const type = req.query.type;
    const formal = req.query.formal;
    const students_list = ['Juan', 'Pedro', 'María', 'José'];
    //res.send(`Hello ${formal ? 'Mr.' : ''} 
    //${name} ${type ? ' ' + type : ''}`);
    res.render('index', {
        name: name,
        students: students_list,
    }) //Enviar datos a la vista
});

app.get('/read-file', (req, res) => {
    const data = readFile(FILE_NAME);
    res.send(data);
});


//Buscar las Rutas de API
app.use('/api/pets',pets_api);
app.use('/pets',petsp);
app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`${APP_NAME} is running on http://localhost:${PORT}`);
});
