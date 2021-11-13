const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

const userSchema = mongoose.Schema(
	{
		firstName: {
			type: String,
			require: true,
			validate: /^[A-Za-z]{2,20}$/,
		},
		lastName: {
			type: String,
			require: true,
			validate: /^[A-Za-z]{2,20}$/,
		},
		email: {
			type: String,
			require: true,
			validate:
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
			unique: true,
		},
		password: {
			type: String,
			require: true,
			validate: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

userSchema.pre('save', function (next) {
	const userData = this;

	bcrypt.hash(userData.password, SALT_ROUNDS, (error, hashedPassword) => {
		if (error) next(error);
		userData.password = hashedPassword;
		next();
	});
});

const schema = mongoose.model('userSchemaModel', userSchema);

class RegisterUser {
	newUserRegistration = (newUser, callback) => {
		try {
			const user = new schema({
				firstName: newUser.firstName,
				lastName: newUser.lastName,
				email: newUser.email,
				password: newUser.password,
			});
			user.save({}, (error, data) => {
				return error ? callback(error, null) : callback(null, data);
			});
		} catch (error) {
			return callback(error, null);
		}
	};
	usersList = (callback) => {
		schema.find({}, (error, data) => {
			return error
				? callback("Couldn't fetch the data from the database!", null)
				: callback(null, data);
		});
	};
	loginUser = (userData, callback) => {
		schema.findOne({ email: userData.email }, (error, data) => {
			return error
				? callback(error, null)
				: !data
				? callback('No user found!', null)
				: callback(null, data);
		});
	};
}

module.exports = mongoose.model('userSchemaModel', userSchema); //TODO:try to comment this line and check if it works the same.
module.exports = new RegisterUser();
