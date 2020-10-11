const db = require('../database/connection')

module.exports = {

	async index(request, response) {
		let { charName, charHistory, name } = request.body
		try {
			const data = await db(`Characters`).insert({
				charName,
				charHistory
			})
			return response.json(data.config.data)
		} catch (error) {
			return response
		}
	}
};