const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);
mongoose
  .connect(
    "mongodb+srv://user:user@cluster0.cuar7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
    }
  )
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));

  const userInfo = mongoose.Schema({
      user: String
  })

  module.exports = mongoose.model('userInfo', userInfo);
