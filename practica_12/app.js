require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.listen(port);
app.use('/assets', express.static(__dirname + '/public'));
app.get('/', (req, _, next) => {
   console.log('Request url: ' + req.url);
   next();
});
app.get('/', (_, res) => {
   res.render('index');
});
app.get('/person/:id', (req, res) => {
   res.render('person', { ID : req.params.id });
});
app.get('/api', (_, res) => {
   res.json({ firstname: 'John', lastname: 'Joe'});
});
