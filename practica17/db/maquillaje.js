require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kenia:kenia@cluster0.nv32u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('La base de datos se a conectado'))
    .catch(err => console.error(err));

const maquillajeScheme = mongoose.Schema({
    color: String,
    stock: Number,
    nombre: String
});

module.exports = mongoose.model('Maquillaje', maquillajeScheme);