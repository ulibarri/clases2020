const express = require('express');
const personRoutes = require('./routes/person');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/persons', personRoutes);
app.use('/assets', express.static(path.join(__dirname, 'public')));
app.use((_, res, __) => {
  res.render('404');
});
app.listen(3000, () => {
  console.log('Listen on port 3000');
});
