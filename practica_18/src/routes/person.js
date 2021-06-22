const express = require('express');

let router = express.Router();

router.get('/person', (_, res) => {
    res.send('Has solicitado el listado de personas');
});

module.exports = router;
