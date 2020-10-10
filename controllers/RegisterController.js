const db = require('../database/connection')
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {

	async index(request, response) {
		let { name, email, password } = request.body
		if (!name || !email || !password) {
			return response
		}
		const salt = bcrypt.genSaltSync(saltRounds);
		const hash = bcrypt.hashSync(password,salt);


		try {
			const data = await db('users').insert({
				name: name,
				email: email,
				hash: hash,
				joined: new Date()
			}) 
			return response.json(data)
		} catch (error) {
			return response
		}  
	
	
}
};