var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.get('/', (req, res, next) => {
    console.log('Request url: ' + req.url);
    next();
 });

app.get('/', function(req, res){
    res.send(`<html><head><link href=assets/style.css type=text/css rel="stylesheet" /></head><body><h1>Hello world!</h1></body></html>`);
});

//segunda ruta
app.get('/api', function(req, res){
    res.json({fisrtname: 'James', lastname: 'Bond'})
});

//tercera ruta
app.get('/person/:id', (req, res) => {
    res.send('<html><head><body><h1>Person: ' + req.params. id + '</h1></body></head></html>')
 });


app.listen(port);