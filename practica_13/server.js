var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname+'/public'));
app.set('view engine', 'ejs');
app.use('/', function (req,res,next) {
    console.log(`Reuquest url: ${req.url}`);
    next();
})

app.get('/', function(req,res) {
    res.send(`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <link href=assets/style.css type=text/css rel=stylesheet />
                    <title>Document</title>
                </head>
                <body>
                    <h1>Hola mundo</h1>
                    <p>este es un parrafo y su contenido debe ser azul</p>
                </body>
                </html>`);
});

app.get('/json', function(req,res) {
    res.json({firstName:'John', lastName:'Doe'});
});

app.get('/persona/:id', function(req,res) {
    // res.send(`<html><head><body><h1>Person: ${req.params.id}</h1></body></head></html>`);
    // res.send(`<!DOCTYPE html>
    //             <html lang="en">
    //             <head>
    //                 <link href=assets/style.css type=text/css rel=stylesheet />
    //                 <title>Document</title>`);
    res.render('persona',{ID: req.params.id, Qstr:req.query.qrst});
});

app.listen(port);