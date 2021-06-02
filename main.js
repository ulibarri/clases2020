require('dotenv').config();
const express = require('express');
const Citas = require('./models/citas.js');
let app = express();
let port = process.env.PORT || 3000;
app.listen(port, () => {
    app.get('/add', (req, res) => {
        Citas.findOne({nombre: 'Iván', ubicacion: 'Centro'}, (err, object) => {
            if (err) console.error(err);
            if (object) {
                res.send('Ya esta añadido');
                console.log('Ya esta añadido');
            } else {
                let newCitas = new Citas({
                    nombre: 'Iván',
                    ubicacion: 'Centro',
                    date: new Date()
                });
                newCitas.save().then(() => {
                    res.send(`Añadido\n${newCitas}`);
                    console.log(`Añadido\n${newCitas}`);
                }).catch((err) => console.err(err));
            }
        });
    });
    app.get('/delete', (req, res) => {
        Citas.findOne({nombre: 'Iván', ubicacion: 'Centro'}, (err, object) => {
            if (err) console.error(err);
            if (!object) {
                res.send('No existe ningun objeto con esos parametros');
                console.log('No existe ningun objeto con esos parametros');
            } else {
                Citas.deleteOne(object).then(() => {
                    res.send(`Eliminado\n${object}`);
                    console.log(`Eliminado\n${object}`);
                }).catch((err) => console.err(err));
            }
        });
    });
});