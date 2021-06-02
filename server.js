const express= require('express');
let app = express();

let PORT= process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false}));

app.set('view engine', 'ejs');

app.get('/', (req,res) =>{
    res.send(`<!DOCTYPE html> <html lang='eng'> <head> <link rel="stylesheet" href="/assets/style.css" type="text/css"/> 
    <title>Document</title> </head>
    <body> <h1>Hola Mundo!</h1>
    <p>Este es un parrafo y su contenido debe ser azul</p> </body> </html>`)
});

app.get('/person/:name', (req,res) => {
    res.render('person', {name: req.params.name, message: req.query.message, times: req.query.times})
});

app.get('/student', (req,res) => {
    res.render('index')
})

app.post('/student', (req, res) => {
    res.send(`First Name es: ${req.body.fname}, Last Name es: ${req.body.lname}`)
})

app.post('/personjson', express.json({type: '*/*'}), (req,res) => {
    console.log('El objeto contiene: ', (req.body));
    console.log('Nombre: ', req.body.firstName);
    console.log('Apellido: ', req.body.lastName);
})

app.listen(PORT);