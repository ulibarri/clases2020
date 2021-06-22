let mongoose = require('mongoose'); //inyeccion de la dependencia
mongoose.connect('mongodb+srv://usuario1:usuario1@cluster0.kf8wu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
//Cadena de conexion

let personSchema = new mongoose.Schema({ //esquema
    nombre: String,
    edad: Number,
    nacimiento: Date,
    tipoSangre: String
});

module.exports = mongoose.model('Persons',personSchema); //modelo