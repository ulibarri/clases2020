require('dotenv').config();
const express = require('express');
const Pets = require('./db/Pets.js');
const app = express();
let port = process.env.PORT || 3000;

app.listen(port, () => {
    app.get('/add', (req, res) => {
        res.send('Add');
        Pets.findOne({name: 'Loki', type: 'Dog'}, (err, object) => {
            if (err) {
                console.error(err);
            }
            if (object) {
                console.log('Already added');
            } else {
                let newPets = new Pets({
                    name: 'Loki',
                    type: 'Dog',
                    age: 4,
                });
                newPets.save().catch(err => console.error(err));
                console.log('Added');
            }
        });
    });
    app.get('/delete', (req, res) => {
        res.send('Delete');
        Pets.findOne({name: 'Charly', artist: 'Cat'}, (err, object) => {
            if (err) {
                console.error(err);
            }
            if (!object) {
                console.log('Already deleted');
            } else {
                Pets.deleteOne({
                    name: 'Charly',
                    type: 'Cat',
                    age: 5
                  }).then(console.log('Deleted')).catch((err) => console.err(err));
            }
        });
    });
});