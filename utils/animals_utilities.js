const Animal = require('../models/animal');

const getAllAnimals = function () {
	return Animal.find();
};

const getAnimalById = function (id) {
	return Animal.findById(id);
};

const addAnimal = function (body) {
	return new Animal(body);
};

const deleteAnimal = function (id) {
	return Animal.findByIdAndRemove(id);
};

const updateAnimal = function (req) {
	return Animal.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
};

module.exports = {
	getAllAnimals,
	getAnimalById,
	addAnimal,
	deleteAnimal,
	updateAnimal,
};
