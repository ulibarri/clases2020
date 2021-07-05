const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', (_, res) => {
  res.render('index');
});
app.get('/api', (_, res) => {
  res.json({ firstName: 'Ulises', lastName: 'Ramirez' });
});
app.get('/person/:id', (req, res) => {
  const ID = req.params.id;
  const qStr = req.query.qstr;
  res.render('person', { ID, qStr });
});
app.use('/assets', express.static(__dirname + '/public'));
app.listen(port, () => console.log('Listening on port', port));
