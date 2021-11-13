require('dotenv').config();

const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const multer = require('multer');
const GridFSStorage = require('multer-gridfs-storage');
const methodOverride = require('method-override');

class connectToDatabase {
	connectToDatabase = () => {
		const dbConnection = mongoose.createConnect(process.env.DATABASE_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			// useFindAndModify: false,
		});

		let gridFS;
		dbConnection
			.once('open', () => {
				gridFS = Grid(dbConnection.db, mongoose.mongo);
				gridFS.collection('uploads');
				console.log('Connected to database successfully!');
			})
			.on('error', (error) => {
				console.log(
					error || 'Some error occurred while connecting to the database!'
				);
				process.exit();
			});
	};
}

module.exports = new connectToDatabase();
