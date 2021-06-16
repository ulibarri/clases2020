var express = require('express');
var app = express();
var port = process.env.port || 3000;
app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function (req, res, next)  {
    console.log('request url:' + req.url);
    next();
});

app.get('/', function (req, res, next)  {
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>hello world!</h1></body></html>');

    
});
app.get('/person/:id', function (req, res) {
    res.send('<html><head></head><body><h1>person:' + req.params.id + '</h1></body></html>');
    
});
app.get('/api', function (req, res)  {
    res.json({firstname: 'john', lastname: 'doe'});
});

app.listen(port);

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/person/:id', function(req, res){
    res.render('person', { ID: req.params.id});
});