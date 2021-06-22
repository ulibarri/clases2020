const express = require('express');
const path = require('path');
let personModel = require(path.join(__dirname, '..', 'models', 'person.model.js'))

let router = express.Router();

router.post('/person', express.json({type: '*/*'}), (req, res) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing');
    } else {
        let model = new personModel(req.body);
        model.save().then((doc) => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc);
            } else {
                res.status(201).send(doc);
            }
        }).catch((err) => {
            res.status(500).json(err);
        });
    }
});

router.get('/person', (req, res) => {
    res.send('Has solicitado el listado de personas');
});
router.get('/person/:name', (req, res) => {
    res.send(`Has solicitado la persona ${req.params.name}`);
});
module.exports = router;
