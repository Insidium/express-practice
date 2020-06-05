const express = require('express');
const router = express.Router();
const { getAnimals, getAnimal } = require('../controllers/animals_controller');

//READ

// GET on '/animals'
//Returns all animals
router.get('/', getAnimals);

// GET on '/animal/:id'
//Returns an animal by id
router.get('/:id', getAnimal);

module.exports = router;
