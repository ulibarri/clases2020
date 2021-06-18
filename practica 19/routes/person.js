let personModel = require('../models/person.model');
let express = require('express'); // inyeccion de la dependencia
let router = express.Router();
// instanciacion del "router" al que asociamos todas
router.post('/person', express.json({type: '*/*'}),(req,res)=>{
    if (!req.body){
        // validamos que el body no tenga vacio, si es asi, enviamos un error
        return res.status(400).send('request body is missing');
    }
    let model = new personModel(req.body);
    model.save()
    // el metodo save regresa una promesa porque es asincrono y todo lo asociado a base de datos es asincrono debido a que NO sabemos cuanto tiempo tarda MongoDB en responder
    .then(doc=>{
        if (!doc || doc.length===0){
            // validamos que la promesa no tenga vacia, si es asi, enviamos un error
            return res.status(500).send(doc); 
        }
        res.status(201).send(doc);
        // la persona contiene datos, enviamos un mensaje de "ok"
    })
    .catch(err=>{
        res.status(500).json(err);
        // en caso de que suceda cualquier error lo "cachamos" para evitar que la aplicacion se detenga
    })
});

router.get('/person',(req,res)=>{
    res.send('has solicitado el listado de personas');
})
router.get('/person/:name',(req,res)=>{
    res.send(`has solicitado la persona ${req.params.name}`);
})

module.exports= router;
