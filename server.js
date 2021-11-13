const { urlencoded } = require('express');
const express = require('express');
require('dotenv').config();
const connectToDatabase = require('./config/databaseConnection');
const CORS = require('cors');

const app = express();

app.use(CORS());
app.use(express.json());
app.use(urlencoded({ extended: true }));

connectToDatabase.connectToDatabase();

app.get('/', (req, res) => {
	res.send('Welcome to DAM: Digital Asset Manager');
});

require('./app/routes/routes')(app);

const PORT = process.env.PORT_NUMBER;
console.log('PORT: ' + PORT);
app.listen(PORT, () => {
	console.log(`Server is running at port number ${PORT}`);
});
