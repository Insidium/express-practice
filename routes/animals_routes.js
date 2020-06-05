const express = require('express');
const router = express.Router();
const { getAnimals } = require('../controllers/animals_controller');

//READ
// GET on '/animals'
//Returns all animals
router.get('/', getAnimals);

module.exports = router;
