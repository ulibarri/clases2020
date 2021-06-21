let personModel = require('../models/person.model');
let express = require('express'); //inyeccion de la dependencia express
let router = express.Router();
//instanciacion del "router" al que asociaremos todas las rutas
router.post('/person',express.json({type: '*/*'}),(req,res)=>{
    if(!req.body){
        //validamos que el body no venga vacio si es asi, enviamos un mensaje
        return res.status(404).send('request body missing');
    }
    let model = new personModel(req.body);
    model.save()
    //el metodo .save regresa una promesa porque es asincrono
    .then(doc=>{
        if (!doc || doc.length===0){
            //validamos que la promesa no venga vacia
            return res.status(500).send(doc);
        }
        res.status(201).send(doc);
        //la promesa contiene datos, enviamos un mensaje de "ok"
    })
    .catch(err=>{
        res.status(500).json(err);
        //en caso de que suceda cualquier error lo "cachamos"
    })
});

router.get('/person',(req,res)=>{
    res.send('has solicitado el listado de personas');
})
router.get('/person/:name',(req,res)=>{
    res.send(`has solicitado la persona ${req.params.name}`);
})

module.exports = router;