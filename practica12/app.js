var express = require('express'); //importamos la dependencia
var app = express(); //declarams una app de express
var port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor

app.use('/assets', express.static(__dirname + '/public'));
app.use('/', function (req, res, next) {
    console.log('Request URL: ' + req.url);
    next();
});

app.set('view engine', 'ejs');

//primera ruta (está al nivel de la raiz /), Hello word!
app.get('/', function (req, res) {
    res.render('index');
})
//recibe un parametro
app.get('/person/:id', function (req, res) {
    res.render('person', { ID: req.params.id });
})
//api, regresando un objeto json
app.get('/api', (req, res) => {
    res.json({ firstname: 'Jonathan', lastname: 'Rodriguez' });
})

app.listen(port); //levantar el server y ponerlo a la escucha