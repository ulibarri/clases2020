const express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;
let path = require('path');

let personRute = require('./routes/person');


app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(personRute);
app.use('/assets', express.static(__dirname + '/public'));


app.listen(PORT, ()=>{
    console.log('escuchando en el puerto 3000')
})

app.use((req, res, next) =>{
    res.render('404');
})