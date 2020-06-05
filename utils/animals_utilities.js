const Animal = require('../models/animal');

const getAllAnimals = function () {
	return Animal.find();
};

module.exports = { getAllAnimals };
