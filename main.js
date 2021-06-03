const express = require('express');
const Llantas = require('./models/llantas')
var PORT = process.env.PORT || 3000;
let app = express()
app.listen(PORT);

app.get('/llantas', (req, res) => {
    Llantas.findOne({tamano: '25.5 cm', marca: 'Michelin'}, (err, obj) =>{
        if(err) console.error(err);
        if(obj){
            console.log('Simon si existe')
            res.send('Simon si existe');
        } else {
            console.log('Nel no existe, añadiendo a la base de datos');
            res.send('Nel no existe, añadiendo a la bae de datos');
            let newLlantas = new Llantas({
                tamano: '25.5 cm',
                marca: 'Michelin',
                modelo: '10'
            }); 
            newLlantas.save()
        }
    })
})
app.get('/quemarllantas', (req, res) => {
    Llantas.findOne({tamano: '25.5 cm', marca: 'Michelin'}, (err, obj) =>{
        if(err) console.error(err);
        if(!obj){
            console.log('No podemos quemar esa llanta porque no existe');
            res.send('No podemos quemar esa llanta porque no existe');
        } else {
            console.log('Llanta quemada');
            res.send('Llanta quemada');
            Llantas.deleteOne(obj).then(()=> console.log('Done')).catch(err => console.error(err));
        }
    })
})



