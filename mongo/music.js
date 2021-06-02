require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

const musicScheme = mongoose.Schema({
    artist: String,
    album: String,
    name: String,
    trackNum: Number
});

module.exports = mongoose.model('Music', musicScheme);