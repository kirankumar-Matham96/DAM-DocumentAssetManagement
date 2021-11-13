'use strict';

const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');

// const dataSchema = mongoose.Schema({});

const storage = new GridFsStorage({
	url: process.env.DATABASE_URL,
	file: (req, file) => {
		return new Promise((resolve, reject) => {
			crypto.randomBytes(16, (err, data) => {
				if (err) return reject(err);
				const filename = data.toString('hex') + path.extname(file.originalName);
				const fileInfo = {
					filename: filename,
					bucketName: 'uploads',
				};
				resolve(fileInfo);
			});
		});
	},
});

module.exports = storage;
