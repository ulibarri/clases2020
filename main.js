require('dotenv').config();
const express = require('express');
const Citas = require('./models/citas.js');
let app = express();
let port = process.env.PORT || 3000;
app.listen(port, () => {
    app.use('/assets', express.static(__dirname + '/public'));
    app.set('view engine', 'ejs');
    app.get('/add/:nombre', (req, res) => {
        //En mi caso https://localhost:3001/add/Iván?ubicacion=Centro
        Citas.findOne({nombre: req.params.nombre, ubicacion: req.query.ubicacion}, (err, object) => {
            if (err) console.error(err);
            if (object) {
                res.render('person.ejs', {nombre: req.params.nombre, ubicacion: req.query.ubicacion, evento: 'El objeto ya existe', objeto: object});
                console.log('Ya esta añadido');
            } else {
                let newCitas = new Citas({
                    nombre: req.params.nombre,
                    ubicacion: req.query.ubicacion,
                    date: new Date()
                });
                newCitas.save().then(() => {
                    res.render('person.ejs', {nombre: req.params.nombre, ubicacion: req.query.ubicacion, evento: 'Añadido', objeto: newCitas});
                    console.log(`Añadido\n${newCitas}`);
                }).catch((err) => console.error(err));
            }
        });
    });
    app.get('/delete/:nombre', (req, res) => {
        //En mi caso https://localhost:3001/add/Iván?ubicacion=Centro
        Citas.findOne({nombre: req.params.nombre, ubicacion: req.query.ubicacion}, (err, object) => {
            if (err) console.error(err);
            if (!object) {
                res.render('person.ejs', {nombre: req.params.nombre, ubicacion: req.query.ubicacion, evento: 'El objeto no existe', objeto: object});
                console.log('No existe ningun objeto con esos parametros');
            } else {
                Citas.deleteOne(object).then(() => {
                    res.render('person.ejs', {nombre: req.params.nombre, ubicacion: req.query.ubicacion, evento: 'Eliminado', objeto: object});
                    console.log(`Eliminado\n${object}`);
                }).catch((err) => console.error(err));
            }
        });
    });
});