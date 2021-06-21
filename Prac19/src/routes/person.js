let express = require('express');
let router = express.Router();
let personModel = require('../model/person.model');

router.get('/person',(req,res)=>{
    res.send('has solicitado el listado de personas');
})

module.exports= router;