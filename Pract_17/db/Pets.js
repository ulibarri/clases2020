require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Loki:Loki123@cluster0.e6dyy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

const petsSchema = mongoose.Schema({
    name: String,
    type: String,
    age: Number
});

module.exports = mongoose.model('Pets', petsSchema);