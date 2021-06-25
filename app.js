let express = require('express');
let app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

// Agregando el template engine (EJS)
app.set('view engine', 'ejs');

app.use('/', (req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
})


app.get('/', (req, res) => {
    res.render('index')
});

app.get('/person/:id', (req, res) => {
    res.render('person', {ID: req.params.id})
});


app.get('/api', (req, res) => {
    res.json({firstname: 'Juan', lastname: 'Michel'})
})

app.listen(port, () => {
    `El servidor ha arrancado correctamente en el puerto ${port}`;
});