const mongoose = require('mongoose');

const urlConnection = 'mongodb+srv://felipe:felipe@cluster0.i96w5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(urlConnection,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(db => console.log('connectado')).catch(err => console.error(err));

const persona = mongoose.Schema({
    nombre: String,
    alias: String
});

module.exports = mongoose.model('persona', persona);
