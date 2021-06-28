var express = require('express'); //importamos la dependencia
var app = express(); //Declaramos una app de express
var port = process.env.PORT || 3000; //Setteamos el puerto para que escuche el servidor
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.get('/', (req, res)=> {
   res.send(`<html><head> <link href=assets/style.css type=text/css rel =stylesheet />
   <title>Document</title></head>
   <body><h1>Hello world!</h1>
   </body></html>`) ;
});


app.get('/person/:id', function(req, res){
    res.render('person', {Name:req.params.id, Message: req.query.qrst, Times: req.query.times});
});


app.get('/student', (req,res) => {
   res.render('index');
})

app.post('/student', express.urlencoded({ extended: false }),(req, res) => {
   res.send(`First Name es: ${req.body.fname}, 
   Last Name es: ${req.body.lname}`);
})

app.post('/personjson', express.json({type: '*/*'}),(req, res) => {
      console.log('El objeto contiene:' , (req.body));
      console.log('Nombre:' , (req.body.firstname));
      console.log('Apellido' , (req.body.lastname));
})

app.listen(port); //levantar el server y ponerlo a la escucha