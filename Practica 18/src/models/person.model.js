let mongoose = require(('mongoose'))
mongoose.connect('mongodb+srv://')

let personSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    nacimiento: Date,
    tipoSangre: String
});

module.exports= mongoose.model('Persons', personSchema)