var express = require('express'); //importamos la dependencia
var app = express(); //declarams una app de express
var port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor

app.use('/assets', express.static(__dirname + '/public'));
app.use('/', function (req, res, next) {
    console.log('Request url: ' + req.url);
    next();
 });

//primera ruta (está al nivel de la raiz /), Hello word!
app.get('/', function (req, res) {
    res.send(`<html><head><link href="assets/style.css type=text/css rel="stylesheet" "/></head>
    <body><h1>Hello world! :3</h1></body></html>`);
})
//segunda ruta /api, regresando un objeto json
app.get('/api', (req, res) => {
    res.json({ firstname: 'Jonathan', lastname: 'Rodriguez' });
})
//tercera ruta, recibe un parametro
app.get('/person/:id', function (req, res) {
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + ' </h1></body></html>');
})

app.listen(port); //levantar el server y ponerlo a la escucha