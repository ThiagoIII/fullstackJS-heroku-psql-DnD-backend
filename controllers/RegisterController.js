const db = require('../database/connection')
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {

	async index(request, response) {
		let { name, email, password } = request.body
		if (!name || !email || !password) {
			return response.status(400).json('Some of the inputs are empty') 
		}
		let newUser = await db.select('*').from('users').where({name: name})
		if(newUser.length > 0) {
			return response.status(400).json('Name already exists')
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
			newUser = await db.select('*').from('users').where({name: name})
			return response.json(newUser)
		} catch (error) {
			return  response.status(400).json(`Not possible to register: ${error}`) 
		}  
	
	
}
};