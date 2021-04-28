
var express = require('express'); //importamos la dependencia
var app = express(); //Declaramos una app de express


var port = process.env.PORT || 3000; //Setteamos el puerto para que escuche el servidor

//Primera ruta (esta al nivel de la raiz /), Hello World!
app.get('/', function(req, res) {
   res.send('<html><head><body><h1>Hello world!</h1></body></head></html>') ;
});

//segunda ruta /api, regresando un objeto JSON
app.get('/api', function(req, res) {
   res.json({firstname: 'Leoanrdo', lastname: 'isordia'});
});

//tercera ruta, recibe un parametro
app.get('/person/:id', function(req, res) {
   res.send('<html><head><body><h1>Persona: ' + req.params.id + '</h1></body></head></html>')
});

app.listen(port); //levantar el server y ponerlo a la escucha