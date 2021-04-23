var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req,res){
    res.send('<html><head></head><body><h1>Hello! world</h1></body></hmtl>');
});

app.listen(port);

// Ruta 2 "API"
app.get('/api', function (req,res){
    res.json({firstname: 'Jhon', lastname:'Doe'});
});

// Ruta 3 "Parametro"
app.get('/person/:id', function (req, res){
    res.send(`<html><head></head><body><h1>Person: ${req.params.id} </h1></body></hmtl>`)
})