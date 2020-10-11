const db = require('../database/connection')
const bcrypt = require('bcrypt');


module.exports = {

	async index(request, response) {
		let {  password } = request.body
		try {
			const data = await db.select('*').from('users').where({id})
			const hash = await data[0].password
			const isValid = bcrypt.compareSync(password, hash)
			isValid ? response.json(data) : response.status(400).json('wrong password')
			
		} catch (error) {
			return response
		}
	}
};