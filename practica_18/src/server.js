  let express = require('express');
//Inyecion de la dependecia de express
let app = express();
let path = require('path');
//app que hace la funciom de servidor
let personRoute = require('./routes/person');
//Incluimos el router que viene en persons

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(personRoute);
app.use('/assets', express.static(__dirname + '/public'));
app.use((req, res, next) => {
  res.render('404');
});

let PORT = process.env.PORT || 3000;
//definicion del puerto

app.listen(PORT, ()=>{
    console.log('escuchando en el puerto 3000');
});