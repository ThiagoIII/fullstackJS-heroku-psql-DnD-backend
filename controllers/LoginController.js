const db = require('../database/connection')
const bcrypt = require('bcrypt');


module.exports = {

	async index(request, response) {
		let { name,  password } = request.body
		if (!name || !password) {
			return response.status(400).json('Some of the inputs are empty')
		}
		try {
			const dataLogin = await db.select('*').from('users').where({name: name})
			console.log('======= FROM THE SERVER =====' ,dataLogin)
			const hash1 = dataLogin[0].hash
			const isValid = bcrypt.compareSync(password, hash1) 
			isValid 
				? response.json({id , name } = dataLogin[0]) 
				: response.status(400).json('wrong password or user')  
		} catch (error) {
			return response
		}
	}
};