let express= require('express');
let path = require('path');
let app = express();
let personsRoute = require('./routes/person');


app.set('views', path.join(__dirname, '../views'));
app.set('views', 'ejs');
app.use(personsRoute);
app.use('/assets', express.static(__dirname + '/public'));

app.use((req,res,next)=>{
    res.render('404');
})
let PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('escuchando en el puerto 3000')
});