require('dotenv').config();

const mongoose = require('mongoose');

class connectToDatabase {
	connectToDatabase = () => {
		mongoose.connect(process.env.DATABASE_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});

		mongoose.connection
			.once('open', () => console.log('Connected to database successfully!'))
			.on('error', (error) => {
				console.log('Some error occured while connecting to the database!');
				process.exit();
			});
	};
}

module.exports = new connectToDatabase();
