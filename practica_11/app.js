var expres = require('express'); //Importamos la dependencia
var app = express(); //Declaramos una app de express
var port = process.env.PORT || 3000; // setteamos el puerto para que escuche el servidor

app.use('/assets', express.static(__dirname + '/public'))
app.use('/',function (req, res, next){
    console.log('Request Url:' + req.url)
    next()
})
app.get('/', function(req, res){
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>')
})

app.get('/', function (req, res){
    res.send(` <html><head><link href=assets/syle.css type=text/css rel=stylesheet></head><body><h1>Hello world!</h1></body></html>` )
})

app.get('/person/:id', function (req, res){
    res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>')
})

app.get('/api', function (req, res){
    res.json({firstname: 'John', lastname: 'Doe'})
});
app.listen(port); 
