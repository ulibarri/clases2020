const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://juan123:juan123@cluster0.fpghz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

let pacienteSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    telefono: Number
})


module.exports = mongoose.model('pacientes', pacienteSchema); //Modelo