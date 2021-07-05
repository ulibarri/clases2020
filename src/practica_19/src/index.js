const express = require('express');
const personRoutes = require('./routes/person');
const mongoose = require('mongoose');

const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use('/persons', personRoutes);
app.use('/assets', express.static(path.join(__dirname, 'public')));
app.use((_, res, __) => {
  res.render('404');
});
const connectDb = async () => {
  const password = process.env.PASSWORD;
  const uri = `mongodb+srv://testing.bk8ww.mongodb.net/`;
  await mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    dbName: 'testing',
    auth: {
      password,
      user: 'walle214',
    },
  });
  console.log('Db connected');
};
const main = async () => {
  await connectDb();
  app.listen(3000, () => {
    console.log('Listen on port 3000');
  });
};
main();
