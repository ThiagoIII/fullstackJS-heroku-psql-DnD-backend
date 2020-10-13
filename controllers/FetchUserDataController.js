const db = require('../database/connection')

module.exports = {

	async index(request, response) {
		const { id } = request.query
		try {
			const chars = await db.select('*').from(`chars`).where({id: id})
			const quests = await db.select('*').from(`quests`).where({id: id})
			return response.json(chars)
		} catch (error) {
			return response
		}
	}
};