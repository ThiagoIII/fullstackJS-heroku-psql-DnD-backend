const db = require('../database/connection')

module.exports = {

	async index(request, response) {
		try {
			const dataChars = await db.select('*').from(`chars`)
			const dataAdvs = await db.select('*').from(`quests`)
			const dataCharsAndAdvs = [dataChars , dataAdvs]
			return response.json(dataCharsAndAdvs)
		} catch (error) {
			return response
		}
	}
};