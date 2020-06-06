const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const animalRouter = require('./routes/animals_routes');

const port = process.env.port || 3008;

const app = express();

app.use(cors());
app.use(bodyParser.json());

const dbConnect = 'mongodb://localhost/animal_shelter_app';

mongoose.connect(
	dbConnect,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		userFindAndModify: false,
	},
	(err) => {
		if (err) {
			console.log('Error connecting database', err);
		} else {
			console.log('Connected to database');
		}
	}
);

app.use('/animals', animalRouter);

app.listen(port, () =>
	console.log(`Animal Shelter server is active on port ${port}`)
);
