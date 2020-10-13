const db = require('../database/connection')
const bcrypt = require('bcrypt');


module.exports = {

	async index(request, response) {
		let { password } = request.body
		try {
			const data = await db.select('*').from('users').where({name: name})
			console.log(data)
			const hash1 = await data[0].hash
			const isValid = bcrypt.compareSync(password, hash1)
			isValid ? response.json(data) : response.status(400).json('wrong password')
			
		} catch (error) {
			return response
		}
	}
};