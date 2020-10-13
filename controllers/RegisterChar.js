const db = require('../database/connection')

module.exports = {

	async index(request, response) {
		let { charName, charHistory, id } = request.body
		if (!id || !charName || !charHistory) {
			return response
		}
		try {
			await db(`chars`)
				.insert({
					id: id,
					charname: charName,
					charhistory: charHistory
				})
			let newChar = await db.select('*')
				.from('chars')
				.where({charHistory: charHistory})	
			return response.json(newChar)
		} catch (error) {
			return response.status(400).json(`Not possible to register: ${error}`) 
		}
	}
};