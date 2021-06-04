const mongoose = require('mongoose');
const Tarea = 'mongodb+srv://USARIO1:USARIO1@clusterchido2021.f4fym.mongodb.net/Tarea17?retryWrites=true&w=majority'
mongoose.connect(Tarea, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is connected'))
    .catch(err  => console.error(err));

const GamesSchema = mongoose.Schema({
    nombre: String,
    genero: String,
});

module.exports = mongoose.model('Games', GamesSchema);