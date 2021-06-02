const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://BrandonVG:BrandonVG12@brandonvg.zqygi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true
})
    .then(db => console.log("DB is connected"))
    .catch(err => console.error(err));