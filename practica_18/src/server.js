const express = require('express');

let app = express();
let personRoute = require('./routes/person.js');

app.set('view engine', 'ejs');
app.use(personRoute);
app.use('/assets', express.static(__dirname+ '/public'));

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Esuchando el puerto ${port}`);
});
