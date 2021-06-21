let express = require('express');
let router = express.Router();
let personModel = require('../models/person.model')

router.get('/person',(req,res)=>{
    res.send('Has solicitado el listado de personas');
})

router.post('/person', express.json ({type: '*/*'}), (req,res)=>{
    if (!req.body){
        return res.status(400).send('request body is missing');
    }
    let model = new personModel(req.body);
    model.save()
    .then(doc=>{
      if(!doc || doc.length === 0){
          return res.status(500).send(doc);
      }
      res.status(201).send(doc);  
    })
    .catch(err=>{
        res.status(500).json(err);
    })
})


module.exports= router;