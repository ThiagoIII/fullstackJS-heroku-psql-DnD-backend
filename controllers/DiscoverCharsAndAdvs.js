const db = require('../database/connection')

module.exports = {

	async index(request, response) {
		try {
			const data = await db.select('*').from(`charsAndAdvs`)
			return response.json(data)
		} catch (error) {
			return response
		}
	}
};