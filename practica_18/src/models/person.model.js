const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Brandon:Brandon@bda.zqygi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true
});

let personSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    nacimiento: Date,
    tipoSangre: String
});

module.exports = mongoose.model("Persons",personSchema);