const { getAllAnimals, getAnimalById } = require('../utils/animals_utilities');

const getAnimals = function (req, res) {
	getAllAnimals().exec((err, animals) => {
		if (err) {
			res.status(500);
			return res.json({
				error: err.message,
			});
		}
		res.send(animals);
	});
};

const getAnimal = function (req, res) {
	getAnimalById(req.params.id).exec((err, animal) => {
		if (err) {
			res.status(404);
			return res.send('Animal not found');
		}
		res.send(animal);
	});
};

module.exports = { getAnimals, getAnimal };
