
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://123:123@cluster0.gt75d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('La base de datos se a conectado'))
    .catch(err => console.error(err));

const userInfo = mongoose.Schema({
    user: String,
    password: String
});

module.exports = mongoose.model('userInfo', userInfo);