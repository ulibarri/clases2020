const express = require('express'); //importamos la dependencia
let app = express(); 
let PORT = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor 
app.use('/assets', express.static(__dirname + '/public'))

app.use(express.urlencoded({ extended: false}));

app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    res.send( `<!DOCTYPE html>
    <html lang="en">
    <head><link rel="stylesheet" href="/assets/style.css">
    <title>Document</title></head>
    <body> <h1>Hola mundo </h1>
    <p> Este es un parrafo y su contenido debe ser azul</p></body></html>`);
} );


app.get('/person/:id', (req,res)=>{
    res.render('person',{Name: req.params.id, Message: req.query.message, Times: req.query.times});
}); 

app.get('/student', (req,res)=>{
    res.render('index');
})

app.post('/student', (req,res)=>{
    res.send(`First name es: ${req.body.fname}, Last name es: ${req.body.lname}`); 
});

app.post('/personjson', express.json({type:'*/*'}),(req, res) => {
    console.log('El objeto contiene:', (req.body));
    console.log('Nombre:', req.body.firstname);
    console.log('Apellido:', req.body.lastname);
 });

 app.listen(port, () => {
    console.log(`http://localhost:${port} is running`);
 });