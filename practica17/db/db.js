require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://usuario1:12345@cluster0.kf8wu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('Conectado a la BD'))
    .catch(err => console.error(err));

const carrosScheme = mongoose.Schema({
    color: String,
    tipo: String,
    marca: String
});

module.exports = mongoose.model('Carros', carrosScheme);