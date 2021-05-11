const expres = require('express'); //Importamos la dependencia
let app = express(); //Declaramos una app de express
let PORT = process.env.PORT || 3000; // setteamos el puerto para que escuche el servidor

app.use('/assets', express.static(__dirname + '/public'))
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.send('<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" /head><body><h1>Hola mundo!</h1></body></html>')
})


app.get('/person/:id', function (req, res){
    res.render('person', {ID: req.params.id, Qstr: req.query.qrst});
})

app.listen(port); 