let express = require('express');
//inyeccion de la dependencia de express
let app = express();
//app que hace la funcion de servidor
let personRoute = require('./routes/person');
//incluimos el router que viene de personas

app.set('view engine', 'ejs');
app.use(personRoute);
app.use('/assets', express.static(__dirname + '/public'));

let PORT = proccess.env.PORT || 3000;
//definicion del puerto de escucha
app.listen(PORT, ()=>{
    console.log('escuchando en el puerto 3000')
});