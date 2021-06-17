let express = require('express');
let router = express.Router();

router.get('/person', (req,res) =>{
    res.send('has solictado el listado de personas');
});

module.exports = router;