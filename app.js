var express = require('express'); //importamos la dependencia
var app = express();  //declaramos una App de Express

var port = process.env.PORT || 3000; //Setteamos el puerto para que escuche el servidor

//primera ruta (está al nivel de la raiz /), Hello World!
app.get('/', (req, res) => {
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

app.listen(port); //levantar el server y ponerlo a la escucha

//segunda ruta /api, regresa un objeto JSON
app.get('/api', (req,res) => {
    res.json({firstname: 'Ivan', Lastname: 'Medrano'});
});

//tercera ruta, recibe un parametro
app.get('/person/:id', (req, res) =>{
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});