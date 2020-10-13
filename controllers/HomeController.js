const db = require('../database/connection')

module.exports = {

	async index(request, response) {
		try {
			const dataHome = await db.select('*').from('users')
			return response.json(dataHome);
		} catch (error) {
			return error
		}
		
	}
};