var express = require('express'); //importamos la dependencia
var app = express(); //declaramos una App de express

var port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor
app.set('view engine', 'ejs');

//primera ruta (esta al nivel de la raiz /), Hello World!
app.get('/', function (req,res){
    res.render('index');
} );

//segunda ruta /api, egresa un objeto JSON
app.get('/api', function (req,res){
    res.render('person', { ID: req.params.id });
});

app.listen(port);//levantar server y ponerlo a la escucha

//tercera ruta, recibe un parametro
app.get('/person/:id', function (req,res){
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});
