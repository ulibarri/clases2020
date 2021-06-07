const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect('mongo "mongodb+srv://cluster0.vkzs6.mongodb.net/myFirstDatabase" --username Dylanson25', {
    useCreateIndex: true,
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));