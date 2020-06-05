const Animal = require('../models/animal');

const getAllAnimals = function () {
	return Animal.find();
};

const getAnimalById = function (id) {
	return Animal.findById(id);
};

module.exports = { getAllAnimals, getAnimalById };
