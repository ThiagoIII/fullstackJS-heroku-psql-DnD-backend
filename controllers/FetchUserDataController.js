const db = require('../database/connection')

module.exports = {

	async index(request, response) {
		const { id } = request.body
		try {
			const chars = await db.select('*').from(`chars`).where({id: id})
			const quests = await db.select('*').from(`quests`).where({id: id})
			const charsAndQuests = [chars, quests]
			return response.json(charsAndQuests)
		} catch (error) {
			return response
		}
	}
};