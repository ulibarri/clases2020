const express = require('express'); //inyeccion de la dependencia
let app = express();
let port = 3000; //definicion del puerto
const Pedidos = require('./db/database.js');

app.listen(port, () => {
    app.get('/agregar', (req, res) => {
        res.send('Estas en agregar pedido');
        Pedidos.findOne({plato: 'lasaña a la boloñesa', bebida: 'soda'}, (err, object) => {
            if (err) {
                console.error(err);
            }
            if (object) {
                console.log('Se agrego');
            } else {
                let newPedidos = new Pedidos({
                    plato: 'lasaña a la boloñesa',
                    bebida: 'soda',
                    tipo: 'local'
                })
                newPedidos.save().catch(err => console.error(err))
                console.log('Agregado');
            }
        })
    })
    app.get('/borrar', (req, res) => {
        res.send('Estas en borrar pedido')
        Pedidos.findOne({plato: 'lasaña a la boloñesa', bebida: 'soda'}, (err, object) => {
            if (err) {
                console.error(err);
            }
            if (!object) {
                console.log('Se borro');
            } else {
                Pedidos.deleteOne({
                    plato: 'lasaña a la boloñesa',
                    bebida: 'soda',
                    tipo: 'local'
                  }).then(console.log('Borrado')).catch((err) => console.err(err));
            }
        })
    })
})