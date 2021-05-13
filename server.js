require('dotenv').config();
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
   res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css"></head><title>Document</title></head><body><h1>Hola mundo</h1><p>Este es un parrafo y su contenido debe ser azul</p></body></html>`);
});

app.get('/person/:id', (req, res) => {
   res.render('person', {ID: req.params.id, q: req.query.q});
});

app.listen(port);