var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname+'/public'));

app.use('/', function (req,res,next) {
    console.log(`Reuquest url: ${req.url}`);
    next();
})

app.get('/', function(req,res) {
    res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hola mundo</h1></body></html>`);
});

app.get('/json', function(req,res) {
    res.json({firstName:'John', lastName:'Doe'});
});

app.get('/persona/:id', function(req,res) {
    res.send(`<html><head><body><h1>Person: ${req.params.id}</h1></body></head></html>`);
});

app.listen(port);