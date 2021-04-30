var express = require('express'); //importamos la dependencia
var app = express();  //declaramos una App de Express

var port = process.env.PORT || 3000; //Setteamos el puerto para que escuche el servidor

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', (req, res, next) => {
    console.log('Request Url:' + req.url);
    next();
})

//primera ruta (está al nivel de la raiz /), Hello World!
app.get('/', (req, res) => {
    res.render('index');
});

//segunda ruta /api, regresa un objeto JSON
app.get('/api', (req,res) => {
    res.json({firstname: 'Ivan', Lastname: 'Medrano'});
});
//tercera ruta, recibe un parametro
app.get('/person/:id', (req, res) =>{
    res.render('person', {ID: req.params.id });
});
app.listen(port); //levantar el server y ponerlo a la escucha