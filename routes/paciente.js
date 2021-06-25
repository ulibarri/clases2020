const express = require('express');
const router = express.Router();
const pacienteModelo = require('../models/pacientes');



router.get('/', (req, res) => {
    res.send( 'Bienvenido a este admin de pacientes' );
})

router.get('/paciente', (req, res) => {
    res.send(`
        <h1>Obteniendo pacientes...</h1>
    `)
});


router.post('/paciente', express.json({type: '*/*'}), (req, res, next) => {

    let nuevoPaciente = new pacienteModelo(req.body);
    console.log(nuevoPaciente);

    try {
        nuevoPaciente.save();
        res.json('El paciente se agrego correctamente');
    } catch (error) {
        console.log(error);
        next();
    }
})


module.exports = router;