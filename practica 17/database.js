const mongoose = require('mongoose');

mongoose.set('useFindandModify', false);
mongoose.connect('mongodb+srv://edu:edu123@cluster0.emnu8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true
})
   .then(db => console.log('DB is connected'))
   .catch(err => console.error(err));
