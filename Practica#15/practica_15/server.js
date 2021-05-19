//inicialozar NPM (npm init -y)
//instalar paquete express (npm i express)
//instalar paquete ejs (npm i ejs)
//instalar nodemon (npm i nodemon)
//instalar bodyparser (npm i body-parser)
//ejecutar nodemon (nodemon <nombre-del-archivo>)

const express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false}));

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.send(`<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="/assets/style.css"><title>Document</title></head><body><h1>Hola mundo</h1></body></html>`)
});

app.get('/person/:id', (req, res) =>{
    res.render('person', {ID: req.params.id, Message: req.query.message, Times: req.query.times});
});

app.get('/student', (req, res) =>{
    res.render('index');
});

app.post('/student', (req, res) =>{
    res.send(`First name es: ${req.body.fname}, Last name es: ${req.body.lname}`)
});

app.listen(PORT);