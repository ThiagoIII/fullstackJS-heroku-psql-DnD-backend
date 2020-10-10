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
			await db('users')
			.insert({
				name: name,
				email: email,
				hash: hash,
				joined: new Date()
			})
			let newUser = await db.select('*')
			.from('users')
			.where({email: email})
			return response.json(newUser)
		} catch (error) {
			return response
		}  
	
	
}
};