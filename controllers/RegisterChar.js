const db = require('../database/connection')

module.exports = {

	async index(request, response) {
		let { charName, charHistory, name } = request.body
		try {
			const dataRegister = await db(`chars`).insert({
				charName,
				charHistory
			})
			return response.json(dataRegister.config.data)
		} catch (error) {
			return response
		}
	}
};