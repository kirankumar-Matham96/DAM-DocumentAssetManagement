const userControl = require('../controller/user');
const controller = require('../controller/controller');
const middleware = require('../middleware/upload');

module.exports = (app) => {
	app.post('/registerNewUser', userControl.registerUser);
	app.get('/Users', userControl.getUsers);
	app.post('/loginUser', userControl.userLogin);

	/*  Need a strategy to use and optimize forgot and reset password APIs */
	// app.get('/forgotPassword', userControl.forgotPassword);
	// app.get('/resetPassword', userControl.resetPassword);

	app.post(
		'/uploadFiles',
		middleware.uploadToStorage.upload.single(`file`),
		controller.uploadFiles
	);
	app.get('/getFiles');
	app.update('/updateFiles');
	app.delete('/deleteFiles');
};
