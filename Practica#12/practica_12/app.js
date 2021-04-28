//inicialozar NPM (npm init -y)
//instalar paquete express (npm i express)
//instalar paquete ejs (npm i ejs)
//instalar nodemon (npm i nodemon)
//guardar en lista de dependencias (npm i express --save)
//ejecutar nodemon (nodemon app.js)

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));
app.use('/', (req, res, next) =>{
    console.log('Request Url:' + req.url);
    next();
});

app.get('/', (req, res)=>{
    res.render('index');
});
app.get('/person/:id', (req, res)=>{
    res.render('person', {ID: req.params.id});
});
app.get('/api', (req, res)=>{
    res.json({firstname: 'John', lastname: 'Connor'});
});

app.listen(port);