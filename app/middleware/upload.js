const multer = require('multer');
const storage = require('../model/DAM_model');

class Helper {
	uploadToStorage = () => {
		const upload = multer({ storage });
		return upload;
	};
}
module.exports = new Helper();
