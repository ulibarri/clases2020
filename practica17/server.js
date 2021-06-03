const express = require('express');
let app = express();
let port = 3000;
const Maquillaje = require('./db/maquillaje.js');

app.listen(port, () => {
    app.get('/agregar', (req, res) => {
        res.send('Estas en el apartado para añadir articulos');
        Maquillaje.findOne({nombre: 'Labial', color: 'Rojo'}, (err, object) => {
            if (err) {
                console.error(err);
            }
            if (object) {
                console.log('Se añadio');
            } else {
                let newMaquillaje = new Maquillaje({
                    nombre: 'Labial',
                    color: 'Rojo',
                    stock: 24
                })
                newMaquillaje.save().catch(err => console.error(err))
                console.log('Añadido');
            }
        })
    })
    app.get('/eliminar', (req, res) => {
        res.send('Estas en el apartado para eliminar articulos')
        Maquillaje.findOne({nombre: 'Labial', color: 'Rojo'}, (err, object) => {
            if (err) {
                console.error(err);
            }
            if (!object) {
                console.log('Se elimino');
            } else {
                Maquillaje.deleteOne({
                    nombre: 'Labial',
                    color: 'Rojo',
                    stock: 24
                  }).then(console.log('Eliminado')).catch((err) => console.err(err));
            }
        })
    })
})