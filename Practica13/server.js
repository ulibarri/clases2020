const express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public')); 

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css">
    <title>Document</title> </head> 
    <body> <h1>HELLOW WORLD </h1>
    <p> A QUI DEBE MIRARSE COLOR AZUL</p></body></html>`)
});

app.get('/person/:id', (req,res) => {
    res.render('person', {ID: req.params.id, Qstr: req.query.qstr});
});

app.listen(PORT);