require('dotenv').config();
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;


app.listen(port);
app.use('/assets', express.static(__dirname + '/public'));
app.get('/', (req, res, next) => {
   console.log('Request url: ' + req.url);
   next();
});
app.get('/', (req, res,) => {
   res.send(`<html><head><link rel="stylesheet" href="assets/style.css"/><body><h1>Hello world!</h1></body></head></html>`);
});
app.get('/person/:id', (req, res) => {
   res.send('<html><head><body><h1>Person: ' + req.params. id + '</h1></body></head></html>')
});
app.get('/api', (req, res) => {
   res.json({ firstname: 'John', lastname: 'Joe'});
});