var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));
app.get('/', (req, res, next) => {
    console.log('Request url: ' + req.url);
    next();
 });

app.get('/', function(req, res){
    res.render(`index`);
});

//segunda ruta
app.get('/api', function(req, res){
    res.json({fisrtname: 'James', lastname: 'Bond'})
});

//tercera ruta
app.get('/person/:id', (req, res) => {
    res.render('person', { ID : req.params.id });
 });


app.listen(port);