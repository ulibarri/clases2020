let express = require('express');
let personModel = require('../models/person.model');
let router = express.Router();

router.post('/person', express.json({type: '*/*'}), (req,res) =>{
    if(!req.body)
        return res.status(404).send('request body is missing');

    let model = new personModel(req.body);
    model.save()
        .then(doc =>{
            if(!doc || doc.length == 0)
                return res.status(500).send(doc);
            res.status(200).send(doc);
        }).catch(err => res.status(500).json(err));
});

router.get('/person', (req,res) =>{
    res.send('has solictado el listado de personas');
});

module.exports = router