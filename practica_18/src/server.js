let express = require('express');
let app = express();
let personRoute = require('./routes/person');

app.set('view engine', 'ejs');
app.use(personRoute);
app.use('/assets', express.static(__dirname + 'public'));

let PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log('escuchando en el puerto 3000');
})