const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Animal = new Schema({
	name: {
		type: String,
		required: true,
	},
	kind: {
		type: String,
		required: true,
	},
	age: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
});

module.exports = mongoose.model('Animal', Animal);
