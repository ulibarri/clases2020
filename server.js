const express = require('express');

let app = express();
let PORT = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) =>{
    res.send(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <link rel ="stylesheet" href="/assets/style.css">
            <title>Document</title>
        </head>
        <body>
            <h1>Hello world</h1>
            <p> Este es un parrafo </p>
        </body>
        </html>`);
});

app.get('/person/:id', (req, res) =>{
    res.render('person',{ID: req.params.id, MSG: req.query.msg, TM: req.query.tm});
});

app.get('/student', (req, res)=>{
    res.render('index');
});

app.post('/student', (req,res)=>{
    res.send(`Firs name is: ${req.body.fname} and last name is: ${req.body.lname}`)
});

app.listen(PORT)