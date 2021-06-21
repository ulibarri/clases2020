let express = require('express');
//Inyeccion de la dependecia de express
let path = require('path');
let app = express();
//app que hace la funciom de servidor
let personRoute = require('./routes/person');
//Incluimos el router que viene en persons

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(personRoute);
app.use('/assets', express.static(__dirname + '/public'));
//router handler para el 404
app.use((req,res,next)=>{
    //renderizamos la vista del 404
    res.render('404');
});
let PORT = process.env.PORT || 3000;
//definicion del puerto de escucha

app.listen(PORT, ()=>{
    console.log('escuchando en el puerto 3000');
});