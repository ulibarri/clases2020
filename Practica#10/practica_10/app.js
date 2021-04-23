//npm init -y
//npm i express
//nmp i nodemon
//nodemon app.js

var express = require('express'); //importamos la dependencia
var app = express(); //declaramos una App de Express

var port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor

//primera ruta (está al nivel de la raíz /), Hello world!
app.get('/', (req, res)=>{
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

//segunda ruta /api, regresa un objero JSON
app.get('/api', (req, res)=>{
    res.json({firstname: 'John', lastname: 'Connor'});
});

//tercera ruta, recibe un parametro
app.get('/person/:id', (req, res)=>{
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.listen(port); //levantar el server y ponerlo a la escucha