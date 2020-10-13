const db = require('../database/connection')
const bcrypt = require('bcrypt');


module.exports = {

	async index(request, response) {
		let { name,  password } = request.body
		try {
			const dataLogin = await db.select('*').from('users').where({name: name})
		/* 	const hash1 = await dataLogin[0].hash
			const isValid = bcrypt.compareSync(password, hash1) */
			const isValid = true;
			isValid ? response.json(dataLogin) : response.status(400).json('wrong password')
			
		} catch (error) {
			return response
		}
	}
};