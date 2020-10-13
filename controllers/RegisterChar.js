const db = require('../database/connection')

module.exports = {

	async index(request, response) {
		let { charName, charHistory, id } = request.body
		try {
			const dataRegister = await db(`chars`).insert({
				id,
				charName,
				charHistory
			})
			console.log(dataRegister.config.data)
			return response.json(dataRegister)
		} catch (error) {
			return response
		}
	}
};