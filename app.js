var express = require('express'); //importamos la dependencia
var app = express(); //Declaramos una app de express
var port = process.env.PORT || 3000; //Setteamos el puerto para que escuche el servidor

app.use('/assets', express.static(__dirname + '/public'));
app.use('/', function(req, res, next) {
   console.log('Requested Url: '+ req.url);
   next();
});

//Primera ruta (esta al nivel de la raiz /), Hello World!
app.get('/', function(req, res) {
   res.send(`<html><head> <link href=assets/style.css type=text/css rel =stylesheet />
   <body><h1>Hello world!</h1></body></head></html>`) ;
});

//tercera ruta, recibe un parametro
app.get('/person/:id', function(req, res) {
   res.send('<html><head><body><h1>Persona: ' + req.params.id + '</h1></body></head></html>')
});

//segunda ruta /api, regresando un objeto JSON
app.get('/api', function(req, res) {
   res.json({firstname: 'Luis', lastname: 'Solis'});
});

app.listen(port); //levantar el server y ponerlo a la escucha