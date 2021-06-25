const express = require('express');
const path = require('path');
let app = express();

const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, '../views')); //Para que esta madre sepa donde estan ls vistas
app.set('view engine', 'ejs'); //Para que sepa cual sera el motor de vistas que utilizaremos por default
app.use('/assets', express.static(__dirname + '/public'));

let routerPerson = require('./routes/person');
app.use('/', routerPerson);

app.use((req, res, next) => { //Ojo: Notar que no hay ni una ruta aca ya que en teoria la ruta no existe xdxd
    res.render('404');
}) 


app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
})