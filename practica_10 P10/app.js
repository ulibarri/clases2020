var express = require('express'); //Importamos la dependencia
var app = express(); //declaramos que es una app de express

var port = process.env.PORT || 3000; //Setteamos el puerto para que escuche el servidor

//primera ruta (está al nivel de la raíz /), Hello World!
app.get('/', function(req, res){
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
})

app.listen(port); //levantar el server y ponerlo a la escucha

//Segunda ruta /api, regresa un objeto json
app.get('/api', function (req, res){
    res-JSON({firstname: 'John', lastname: 'Doe'})
})

//Tercera ruta, recibe un parametro
app.get('/person/:id', function (req, res) {
    res.send('<html><head></head><bodyh><h1>Person: ' + req.params.id + '</h1></body></html>')
})