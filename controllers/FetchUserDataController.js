const db = require('../database/connection')

module.exports = {

	async index(request, response) {
		const { name } = request.query
		try {
			const data = await db.select('*').from(`${name}Characters`)
			return response.json(data)
		} catch (error) {
			return response
		}
	}
};