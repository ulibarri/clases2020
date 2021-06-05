var express = require('express'); //importamos la dependencia
var app = express(); //Declaramos una app de express
var port = process.env.PORT || 3000; //Setteamos el puerto para que escuche el servidor
app.use('/assets', express.static(__dirname + '/public'));
const Users = require('./models/usuarios.js');

app.listen(port, () => {
   app.get('/register', (req, res) => {
       res.send('Bienvenido al registro');
       Users.findOne({user: 'Hola', password: 'Soy_Goku'}, (err, object) => {
           if (err) {
               console.error(err);
           }
           if (object) {
               console.log('Ya existe el usuario "Hola"');
           } else {
               let nUser = new Users({
                   user: 'Hola',
                   password: 'Soy_Goku',
               })

               nUser.save().catch(err => console.error(err))
               console.log('Se a añadido el usuario "Hola" ');
           }
       })
   })
})
