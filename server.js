const express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;
app.use('/assets',express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')


app.get('/',(req,res)=>{
    res.send(`<!DOCTYPE html> <htm lang='eng'> <head> <link rel="stylesheet" href="/assets/style.css" type="text/css"/> 
    <title>Document</title> </head>
    <b> <h1>Hola Mundo!</h1>`)
});

app.get('/person/:id', (req,res) => {
    res.render('person', {ID: req.params.id, Qstr: req.query.qrst})
});

app.get('/student',(req,res)=>{
    res.render('index')
})

app.post('/student', (req,res) =>{
    res.send(`First name is: ${req.body.Fname}, Last Name is: ${req.body.Lname}`)
}) 

app.listen(PORT);
