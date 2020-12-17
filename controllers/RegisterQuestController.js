const db = require('../database/connection')

module.exports = {

	async index(request, response) {
		let { questName, questHistory, id } = request.body
		if (!id || !questName || !questHistory) {
			return response.status(400).json('Some of the inputs are empty')
		}
		let newQuest = await db.select('*').from('quests').where({questname: questName})
		if(newQuest.length > 0) {
			return response.status(400).json('Quest name already exists')
		} 
		try {
			await db(`quests`)
					.insert({
						id: id,
						questname: questName,
						quest: questHistory
					})
			newQuest = await db.select('*').from('quests').where({questname: questName})
			return response.json(newQuest)
		} catch (error) {
			return response.status(400).json(`Not possible to register: ${error}`) 
		}
	}
};