const db = require('../database/connection')

module.exports = {

	async index(request, response) {
		try {
			const dataCharsAndAdvs = await db.select('*').from(`chars`)
			return response.json(dataCharsAndAdvs)
		} catch (error) {
			return response
		}
	}
};