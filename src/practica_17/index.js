const mongoose = require('mongoose');

const main = async () => {
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
main();
