let express = require('express');
//inyeccion de la dependencia de express
let app = express();
//app que hace que hace la funcion de servidor
let personRoute = require('./routes/person');
//incluimos el router que viene de persons

app.set('view engine', 'ejs');
app.use(personRoute);
app.use('/assets', express.static(__dirname + '/public'));

let port = process.env.PORT || 3000;
//definicion del puerto de escucha

app.listen(port,()=>{
    console.log(`Esuchando el puerto 3000`);
});