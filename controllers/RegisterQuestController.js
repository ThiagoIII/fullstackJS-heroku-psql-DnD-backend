const db = require('../database/connection')

module.exports = {

	async index(request, response) {
		let { questName, questHistory, id } = request.body
		if (!id || !questName || !questHistory) {
			return response
		}
		try {
			await db(`quests`)
				.insert({
					id: id,
					questname: questName,
					quest: questHistory
				})
			let newQuest = await db.select('*')
				.from('quests')
				.where({questname: questName})	
			return response.json(newQuest)
		} catch (error) {
			return response.status(400).json(`Not possible to register: ${error}`) 
		}
	}
};