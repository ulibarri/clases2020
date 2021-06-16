var express = require('express');
var app = express();

var port = process.env.port || 3000;

app.get('/', function(req, res) {
    res.send('<html><head></head><body><h1>hello world</h1></body></html>');

});

app.listen(port)

app.get('/api', function (req, res) {
    res.json({firstname: 'john', lastname: 'doe'});
});

app.get('/person/id', function(req, res){
    res.send('<html><head></head><body><h1>Person:' +req.param.id + '</h1></body></html>');
});