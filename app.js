var express = require('express'); //importamos la dependencia
var app = express(); //Declaramos una app de express

var port = process.env.PORT || 3000; //Setteamos el puerto para que escuche el servidor

//Primera ruta (esta al nivel de la raiz /)
app.get('/', function(req, res) {
    res.send('<html><head><body><h1>Hello World!</h1></body></head></html>');
});

//segunda ruta /api, regresando un objeto json
app.get('/api', (req, res) => {
    res.json({ firstname: 'John', lastname: 'Doe' });
});
//tercera ruta, recibe un parametro
app.get('/person/:id', function (req, res) {
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.listen(port); //levantar el server y ponerlo a la escucha

