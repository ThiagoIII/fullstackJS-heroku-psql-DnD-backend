const db = require('../database/connection')
const bcrypt = require('bcrypt');


module.exports = {

	async index(request, response) {
		let { name,  password } = request.body
		try {
			const dataLogin = await db.select('*').from('users').where({name: name})
			const hash1 = await dataLogin.data[0]
			/* const isValid = bcrypt.compareSync(password, hash1) 
			isValid ? response.json(dataLogin.data[0]) : response.status(400).json('wrong password') */
			return response.json(hash1)
			
		} catch (error) {
			return response
		}
	}
};