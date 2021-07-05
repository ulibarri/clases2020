const express = require('express');
const PersonModel = require('../models/person');
const routes = express.Router();

routes.post('/', express.json({ type: '*/*' }), async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: 'Body is missing' });
  }
  try {
    const { nombre, edad, nacimiento, tipoSange } = req.body;
    const newPerson = new PersonModel({
      nombre,
      edad,
      nacimiento,
      tipoSange,
    });
    const doc = await newPerson.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
});
routes.get('/', (_, res) => {
  res.send('Has solicitado el listado de personas');
});

module.exports = routes;
