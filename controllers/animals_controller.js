const { getAllAnimals } = require('../utils/animals_utilities');

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

module.exports = { getAnimals };
