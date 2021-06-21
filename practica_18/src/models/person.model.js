let mongoose = requiere('mongoose');
mongoose.connect('mongodb+srv://123:123@cluster0.gt75d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

let personSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    nacimiento: Date,
    tipoSangre: String
});

module.exports= mongoose.model('Persons',personSchema);