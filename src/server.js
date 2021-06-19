let express = require('express');
let app = express();
let personsRoute = require('./routes/person.js');
let path = require ('path');

app.set('view engine', 'ejs');
app.use(personsRoute);
app.use('/assets', express.static(__dirname + '/public'));

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Escuchando en el puerto 3000')
})

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use((req,res,next) =>{
    res.render('404');
})