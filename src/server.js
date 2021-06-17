const express = require('express');
let app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

let routerPerson = require('./routes/person');
app.use(routerPerson);


app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
})