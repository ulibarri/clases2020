var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname+'/public'));

app.use('/', function (req,res,next) {
    console.log(`Reuquest url: ${req.url}`);
    next();
})

app.get('/', function(req,res) {
    res.render('index');
});

app.get('/persona/:id', function(req,res) {
    res.render('person', {ID: req.params.id});
});

app.get('/json', function(req,res) {
    res.json({firstName:'John', lastName:'Doe'});
});


app.listen(port);