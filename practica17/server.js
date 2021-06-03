const express = require('express'); //inyeccion de la dependencia
let app = express();
let port = 3000; //definicion del puerto
const Carros = require('./db/db.js');

app.listen(port, () => {
    app.get('/agregar', (req, res) => {
        res.send('Estas en agregar carro');
        Carros.findOne({marca: 'toyota', color: 'gris'}, (err, object) => {
            if (err) {
                console.error(err);
            }
            if (object) {
                console.log('Se agrego');
            } else {
                let newCarros = new Carros({
                    marca: 'toyota',
                    color: 'gris',
                    tipo: 'sedan'
                })
                newCarros.save().catch(err => console.error(err))
                console.log('Agregado');
            }
        })
    })
    app.get('/borrar', (req, res) => {
        res.send('Estas en borrar carro')
        Carros.findOne({marca: 'toyota', color: 'gris'}, (err, object) => {
            if (err) {
                console.error(err);
            }
            if (!object) {
                console.log('Se borro');
            } else {
                Carros.deleteOne({
                    marca: 'toyota',
                    color: 'gris',
                    tipo: 'sedan'
                  }).then(console.log('Borrado')).catch((err) => console.err(err));
            }
        })
    })
})