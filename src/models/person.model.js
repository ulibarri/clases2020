const Mongoose = require("mongoose");

Mongoose.connect('mongodb+srv://Quackduster:quack123@cluster0.einty.mongodb.net/Restful_API?retryWrites=true&w=majority')

let personSchema = new Mongoose.Schema({
    nombre: String,
    edad: Number, 
    nacimiento: Date,
    tipoSangre: String

})

module.exports = Mongoose.model('Persons', personSchema)