'use strict';
const Service = require('../service/service.js');

class Controller {
	uploadFiles = (req, res) => {
		const file = req.body;
		Service.fileUpload(file, (error, file) => {
			return error
				? res.status(500).send({
						success: false,
						message: error || 'Something went wrong!',
				  })
				: res.status(200).send({
						success: true,
						message: 'file uploaded successfully!',
						data: file,
				  });
		});
	};
	getFiles = (req, res) => {
		Service.fileGet((error, file) => {
			return error
				? res.status(500).send({
						success: false,
						message: error || 'Something went wrong!',
				  })
				: res.status(200).send({
						success: true,
						message: 'file fetched successfully!',
						data: file,
				  });
		});
	};
	updateFiles = (req, res) => {
		const file = req.body;
		Service.fileUpdate(file, (error, file) => {
			return error
				? res.status(500).send({
						success: false,
						message: error || 'Something went wrong!',
				  })
				: res.status(200).send({
						success: true,
						message: 'file updated successfully!',
						data: file,
				  });
		});
	};
	deleteFiles = (req, res) => {
		const file = req.body;
		Service.fileDelete(file, (error, file) => {
			return error
				? res.status(500).send({
						success: false,
						message: error || 'Something went wrong!',
				  })
				: res.status(200).send({
						success: true,
						message: 'file deleted successfully!',
						data: file,
				  });
		});
	};
}

module.exports = new Controller();
