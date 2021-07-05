const express = require('express');
const routes = express.Router();

routes.get('/', (_, res) => {
  res.send('Has solicitado el listado de personas');
});
module.exports = routes;
