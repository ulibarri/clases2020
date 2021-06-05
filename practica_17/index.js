const Persona  = require('./model/connection');
const express = require('express');

var app = express();
var port = process.env.PORT || 3001;

// app.listen(port);

app.listen(port, () => {
    app.get('/agregar', (req, res) => {
        res.send('Estas por agregar una persona');
        Persona.findOne({nombre: 'Gabriel'}, (err, object) => {
            if (err)
                console.error(err);
            if (object)
                console.log('Agregado');
            else {
                let newPersona = new Persona({nombre: 'Gabriel', alias:'el Sr.'})
                newPersona.save().then(console.log('Agregado')).catch(err => console.error(err));
            }
        })
    })
    app.get('/delete', (req, res) => {
        res.send('Estas por borrar una persona')
        Persona.findOne({nombre: 'Gabriel'}, (err, object) => {
            if (err) 
                console.error(err);
            if (!object) 
                console.log('Borrado');
            else 
                Persona.deleteOne({nombre: 'Gabriel', alias:'el Sr.'}).then(console.log('Borrado')).catch((err) => console.err(err));
        })
    })
})