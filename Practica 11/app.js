var express = require('express'); //importamos la dependencia
var app = express(); //declaramos una App de express
var port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor 
app.use('/assets', express.static(__dirname + '/public'))
//primera ruta (esta al niveñ de la raiz /), Hello World!
app.get('/', function (req,res){
    res.send( `<html>
    <head><link href= assets/style.css type=text/css rel=stylesheet /></head>
    <body><h1>Hello World</h1></body></html>`);
} );

//segunda ruta /api, egresa un objeto JSON
app.get('/api', function (req,res){
    res.json({firstname: 'Ximena', lastname: 'Velasco'});
});
app.listen(port);//levantar server y ponerlo a la escucha

//tercera ruta, recibe un parametro
app.get('/person/:id', function (req,res){
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
}); 
