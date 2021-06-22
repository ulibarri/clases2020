const path = require('path');
const express = require('express');

let app = express();
let personRoute = require('./routes/person.js');

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');
app.use(personRoute);
app.use('/assets', express.static(__dirname+ '/public'));
app.use((req, res, next) => {
    res.render('404');
})

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Esuchando el puerto ${port}`);
});
