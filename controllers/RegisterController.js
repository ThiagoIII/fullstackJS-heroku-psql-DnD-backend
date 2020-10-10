const db = require('../database/connection')
const crypto = require('crypto'); 
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {

	async index(request, response) {
		let { age, name, birthday, password } = request.body
		if (!age || !name || !birthday || !password) {
			return response.status(400).json('incorrect form submission, some input is empty');
		}
		
		const id = crypto.randomBytes(4).toString('HEX');
		const salt = bcrypt.genSaltSync(saltRounds);
		const hash = bcrypt.hashSync(password,salt);

		try {
			const data = await db('users').insert({
				age,
				name,
				birthday,
				password: hash
			})
			return response.json('User registered with success')
		} catch (error) {
			return response.status(400).json('unable to register', error)
		}
	}
};