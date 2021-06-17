let express = require('express'); // inyeccion de la dependencia
let router = express.Router();
// instanciacion del "router" al que asociamos todas

router.get('/person',(req,res)=>{
    res.send('has solicitado el listado de personas');
})

module.exports= router;
