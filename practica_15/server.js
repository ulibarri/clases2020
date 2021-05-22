require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.get('/', (_, res) => {
   res.send(`<!DOCTYPE html>
             <html lang="en">
             <head><link rel="stylesheet" href="/assets/style.css" /><title>Document</title></head>
             <body><h1>Hola mundo</h1><p>Este es un parrafo y su contenido debe ser azul</p></body>
             </html>`);
});

app.get('/person/:name', (req, res) => {
   res.render('person', { name: req.params.name, message: req.query.message, times: req.query.times });
});

app.get('/student', (_, res) => {
   res.render('index.ejs');
});

app.post('/student', (req, res) => {
   res.send(`Fisrt Name es: ${req.body.fname}, Last Name es: ${req.body.lname}`);
});

app.listen(port);
