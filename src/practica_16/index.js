const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', (_, res) => {
  res.render('index');
});
app.get('/api', (_, res) => {
  res.json({ firstName: 'Ulises', lastName: 'Ramirez' });
});
app.get('/person/:id', (req, res) => {
  const ID = req.params.id;
  const { message, times } = req.query;
  res.render('person', { ID, message, times });
});
app.post('/personJson/', express.json({ type: '*/*' }), (req, res) => {
  const { fName, lName } = req.body;
  console.log('El objeto contine:', req.body);
  console.log('Nombre:', fName);
  console.log('Apellido:', lName);
  res.json({ fName, lName });
});

app.post('/student', (req, res) => {
  const { fname, lname } = req.body;
  res.send(`First name es: ${fname}; Last name es ${lname}`);
});
app.use('/assets', express.static(__dirname + '/public'));
app.listen(port, () => console.log('Listening on port', port));
