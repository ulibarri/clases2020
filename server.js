var express = require('express'); //importamos la dependencia
var app = express(); //Declaramos una app de express
var port = process.env.PORT || 3000; //Setteamos el puerto para que escuche el servidor

app.use('/assets', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false}));

app.set('view engine', 'ejs');


//Primera ruta (esta al nivel de la raiz /), Hello World!
app.get('/', function(req, res) {
   res.send(`<html><head> <link href=assets/style.css type=text/css rel =stylesheet />
   <title>Document</title></head>
   <body><h1>Hello world!</h1>
   </body></html>`) ;
});

//tercera ruta, recibe un parametro
app.get('/person/:id', function(req, res){
    res.render('person', {Name:req.params.id, Message: req.query.qrst, Times: req.query.times});
});


app.get('/student', (req,res) => {
   res.render('index');
})

app.post('/student', (req, res) => {
   res.send(`First Name es: ${req.body.fname}, Last Name es: ${req.body.lname}`);
})






app.listen(port); //levantar el server y ponerlo a la escucha
