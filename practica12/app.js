var express = require('express'); 
var app = express(); 
var port = process.env.PORT || 3000; 
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use('/', function (req, res, next) {
    console.log('Request URL: ' + req.url);
    next();
});



app.get('/', function (req, res) {
    res.render('index');
})

app.get('/person/:id', function (req, res) {
    res.render('person', { ID: req.params.id });
})

app.get('/api', (req, res) => {
    res.json({ firstname: 'Kenia', lastname: 'Villa' });
})

app.listen(port); 