require('dotenv').config();
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.listen(port);
app.use('/assets', express.static(__dirname + '/public'));
app.get('/', (req, res, next) => {
   console.log('Request url: ' + req.url);
   next();
});
app.get('/', (req, res) => {
   res.render('index');
});
app.get('/person/:id', (req, res) => {
   res.render('person', { ID : req.params.id });
});
app.get('/api', (req, res) => {
   res.json({ firstname: 'John', lastname: 'Joe'});
});