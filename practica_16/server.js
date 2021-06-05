var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname+'/public'));
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.get('/', function(req,res) {
    res.send(`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <link href=assets/style.css type=text/css rel=stylesheet />
                    <title>Document</title>
                </head>
                <body>
                    <h1>Hola mundo</h1>
                    <p>este es un parrafo y su contenido debe ser azul</p>
                </body>
                </html>`);
});



app.get('/persona/:id', function(req,res) {
    res.render('persona',{ID: req.params.id, Message: req.query.message, Times: req.query.times});
});
app.get("/student", (req, res) =>{
    res.render("index");
});
app.post('/student', function (req,res) {
    res.send(`First name es ${req.body.fname}, y el Last name es ${req.body.lname}`); 
});
app.post('/personajson', express.json({type: '*/*'}), (req, res) => {
    console.log('El objeto contiene:', req.body);
    console.log('nombre:', req.body.fname);
    console.log('apellido:', req.body.lname);
});
app.listen(port);