  let express = require('express');
//Inyecion de la dependecia de express
let app = express();
//app que hace la funciom de servidor
let personRoute = require('./routes/person');
//Incluimos el router que viene en persons

app.set('view engine', 'ejs');
app.use(personRoute);
app.use('/assets', express.static(__dirname + '/public'));

let PORT = process.env.PORT || 3000;
//definicion del puerto

app.listen(PORT, ()=>{
    console.log('escuchando en el puerto 3000');
});