const express = require('express');
let app = express();
let port = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send(`<!doctype html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css"> <title>Document</title> </head> <body> <h1>Hola mundo</h1>
    <p> Este es un parrafo y su contenido debe ser azul</p> </body> </html>`)
});

// app.get('/person/:id', (req, res) => {
//     res.send(`<!doctype html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css`)
// });

app.get('/person/:name', (req, res) => {
    res.render('person', {name: req.params.name, message: req.query.message, times: req.query.times});
});

app.listen(port);