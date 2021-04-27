var express = require('express'); //importamos la dependencia
var app = express(); //Declaramos una app de express
var port = process.env.PORT || 3000; //Setteamos el puerto para que escuche el servidor
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
    console.log('Request URL:' + req.url);
    next();
});
//Primera ruta (esta al nivel de la raiz /)
app.get('/', function (req, res) {
    //res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head>
    //<body><h1>Hello World!</h1></body></html>`);
    res.render('index');
});

//tercera ruta, recibe un parametro
app.get('/person/:id', function (req, res) {
    //res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
    res.render('person', { ID: req.params.id });
});

//segunda ruta /api, regresando un objeto json
app.get('/api', (req, res) => {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port); //levantar el server y ponerlo a la escucha