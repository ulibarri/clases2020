let express = require('express'); //inyeccion de la dependencia
let router = express.Router();
// Instancia del "Router" al que asociaremos todas

router.get('/person',(req,res)=>{
    res.send('Se muestra el texto de person.js');
})

module.exports = router;