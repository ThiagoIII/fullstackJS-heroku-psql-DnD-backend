const db = require('../database/connection')

module.exports = {

	async index(request, response) {
		try {
			const data = await db.select('*').from('users')
			return response.json(data);
		} catch (error) {
			return error
		}
		
	}
};