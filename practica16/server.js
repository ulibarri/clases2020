const express = require('express'); //inyeccion de la dependencia
let app = express();
let PORT = process.env.PORT || 3000; //definicion del puerto de escucha 
app.use('/assets', express.static(__dirname + '/public')); //contenido estatico
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{  
    res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css"> 
    <title>Document</title> </head>
    <body> <h1> Hola mundo </h1>
    <p> Este es un parrafo y su contenido debe ser azul</p></body> </html>`)
});

app.get('/person/:id', (req, res)=>{
    res.render('person',{ID: req.params.id, Message: req.query.message, Times: req.query.times});
});

app.get('/student', (req, res)=>{
    res.render('student');
});

app.post('/student', express.urlencoded({ extended: false }), (req, res)=>{
    res.send(`First Name is: ${req.body.firstN}, Last Name is: ${req.body.lastN}`);
});

//Enviamos como parametro extra, el callback, para que se ejecute antes que el router handler
app.post('/studentjson', express.json({type: '*/*'}), (req, res)=>{
    console.log('El objeto contiene:' , (req.body));
    console.log('Nombre:' , req.body.firstName);
    console.log('Apellido:' , req.body.lastName);
})

app.listen(PORT);