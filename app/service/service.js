'use strict';
const model = require('../model/DAM_model');

class serviceFiles {
	fileGet = (callback) => {
		model.getAllFiles((error, files) => {
			return error ? callback(error, null) : callback(null, files);
		});
	};
	fileUpload = (newFile, callback) => {
		model.uploadNewFile(newFile, (error, files) => {
			return error ? callback(error, null) : callback(null, files);
		});
	};
	fileUpdate = (fileData, callback) => {
		model.updateTheFile(fileData, (error, files) => {
			return error ? callback(error, null) : callback(null, files);
		});
	};
	fileDelete = (fileData, callback) => {
		model.deleteTheFile(fileData, (error, files) => {
			return error ? callback(error, null) : callback(null, files);
		});
	};
}

module.exports = new serviceFiles();
