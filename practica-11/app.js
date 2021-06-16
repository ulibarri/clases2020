var express = require('express');
var app = express();

var port = process.env.PORT || 300;/// setea el puerto 
//primera ruta 
app.get('/', function (req, res)){
    res.send('<html><head</head><body><h1>hello world!</h1></body></html>');
});

//segunda ruta
app.get('/api', function (req, res) {
    res.json({firstname: 'john', lastname: 'doe'});
});
//tercera ruta
app.get('/person/:id', function (req, res){
    res.send('<html><head></head><body><h1>person:' + req.params.id + '</h1></body></html>');

});
app.listen(port);