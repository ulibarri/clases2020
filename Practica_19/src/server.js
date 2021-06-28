let express = require('express');
//inyeccion de la dependencia de express
let path = require("path");
let app = express();
//app que hace que hace la funcion de servidor
let personsRoute = require('./routes/person');
//incluimos el router que viene de persons

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(personsRoute);
app.use('/assets', express.static(__dirname + '/public'));
//router handler para el 404
app.use((req,res,next)=>{
    //renderizamos la vista del 404
    res.render('404');
});
let PORT = process.env.PORT || 3000;
//definicion del puerto de escucha

app.listen(PORT,()=>{
    console.log(`Esuchando el puerto 3000`);
});