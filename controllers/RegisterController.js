const db = require('../database/connection')
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {

	async index(request, response) {
		/* let { name, email, password } = request.body
		if (!name || !email || !password) {
			return response
		}
		
		const salt = bcrypt.genSaltSync(saltRounds);
	 	const hash = bcrypt.hashSync(password,salt); 

		try {
			const data = await db('users').insert({
				name: name,
				email: email,
				hash: 123
			})
			return response.json('teste de dentro do register controller')
		} catch (error) {
			return response
		}
	} */
	return response.json('tudo certo')
};