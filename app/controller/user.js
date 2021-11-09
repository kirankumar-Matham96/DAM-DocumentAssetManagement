'use strict';
const service = require('../service/user');
class UserController {
	registerUser = (req, res) => {
		const userDetails = {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password,
		};

		service.register(userDetails, (error, data) => {
			try {
				return error
					? res.status(500).send({
							success: false,
							message: 'Something went wrong while registering!',
					  })
					: res.status(200).send({
							success: true,
							message: 'User registered successfully',
							data: data,
					  });
			} catch (error) {
				res.status(500).send({
					success: false,
					message: 'some error occurred',
				});
			}
		});
	};

	getUsers = (req, res) => {
		service.getAllUsers((error, data) => {
			return error
				? res
						.status(500)
						.send({ success: false, message: 'cannot fetch the users!' })
				: res
						.status(200)
						.send({ succes: true, message: 'Fetched the users', data: data });
		});
	};

	userLogin = (req, res) => {
		try {
			const userData = {
				email: req.body.email,
				password: req.body.password,
			};

			service.login(userData, (error, data) => {
				return error
					? res.status(500).send({
							success: false,
							message: 'something went wrong!',
					  })
					: res.status(200).send({
							success: true,
							message: 'User logged in successfully!',
							data: data,
					  });
			});
		} catch (error) {
			res.status(500).send({
				success: false,
				message: 'something went wrong!',
			});
		}
	};
}

module.exports = new UserController();
