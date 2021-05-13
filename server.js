var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send(`<html><head><link href=assets/style.css type=text/css rel="stylesheet" /></head><body><h1>Hello world!</h1><p>Este es un parrafo y su contenido debe ser azul</p></body></html>`);
});

app.get('/person/:id', (req,res) => {
    res.render('person', {ID: req.params.id, Qstr: req.query.qr});
 });

app.listen(port);