require('dotenv').config();
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
   res.send('<html><head><body><h1>Hello world!</h1></body></head></html>') ;
});
app.get('/api', function(req, res) {
   res.json({firstname: 'Ivan', lastname: 'Godinez'});
});
app.get('/person/:id', function(req, res) {
   res.send('<html><head><body><h1>Persona: ' + req.params.id + '</h1></body></head></html>')
})
app.listen(port);