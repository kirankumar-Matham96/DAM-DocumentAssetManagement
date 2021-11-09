'use strict';

const model = require('../model/user');
class userService {
	register = (userData, callback) => {
		try {
			model.newUserRegistration(userData, (error, data) => {
				return error ? callback(error, null) : callback(null, data);
			});
		} catch (error) {
			callback(error, null);
		}
	};

	getAllUsers = (callback) => {
		try {
			model.usersList((error, data) => {
				return error ? callback(error, null) : callback(null, data);
			});
		} catch (error) {
			return callback(error, null);
		}
	};

	login = (userData, callback) => {
		try {
			model.loginUser(userData, (error, data) => {
				return error ? callback(error, null) : callback(null, data);
			});
		} catch (error) {
			callback(error, null);
		}
	};
}

module.exports = new userService();
