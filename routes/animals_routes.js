const express = require('express');
const router = express.Router();
const {
	getAnimals,
	getAnimal,
	postAnimal,
	removeAnimal,
	changeAnimal,
} = require('../controllers/animals_controller');

//READ

// GET on '/animals'
//Returns all animals
router.get('/', getAnimals);

// GET on '/animals/:id'
//Returns an animal by id
router.get('/:id', getAnimal);

//CREATE

// POST on '/animals'
// Create new animal
router.post('/', postAnimal);

//DELETE

// DELETE from '/animals/:id'
// Delete animal by id
router.delete('/:id', removeAnimal);

//UPDATE

// PUT on '/animals/:id'
// Update animal by id
router.put('/:id', changeAnimal);

module.exports = router;
