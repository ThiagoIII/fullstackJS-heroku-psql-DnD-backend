const db = require('../database/connection')
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {

	async index(request, response) {
		let { name, email, password } = request.body
		if (!name || !email || !password) {
			return response.status(400).json('incorrect form submission, some input is empty');
		}
		
		const salt = bcrypt.genSaltSync(saltRounds);
		const hash = bcrypt.hashSync(password,salt);

		try {
			const data = await db('users').insert({
				name,
				email,
				hash
			})
			return response.json(data)
		} catch (error) {
			return response
		}
	}
};