let express = require('express');
let app = express();
let personRoute = require('./routes/person');
let path = require('path');
let PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(personRoute);
app.use('/assets', express.static(__dirname + '/public'));


app.use((req, res, next) =>{
    res.render('404');
})
app.listen(PORT, () =>{
    console.log('escuchando en el puerto 3000');
});