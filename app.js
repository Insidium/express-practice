const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const port = process.env.port || 3008;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () =>
	console.log(`Animal Shelter server is listening on port ${port}`)
);
