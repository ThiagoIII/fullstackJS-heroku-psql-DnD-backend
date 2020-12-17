const db = require('../database/connection')

module.exports = {

	async index(request, response) {
		let { charname, charhistory, id } = request.body
		if (!id || !charname || !charhistory) {
			return response.status(400).json('Some of the inputs are empty') 
		}
		let newChar = await db.select('*').from('quests').where({charname: charname})
		if(newChar.length > 0) {
			return response.status(400).json('Char name already exists')
		} 
		try {
			await db(`chars`)
					.insert({
						id: id,
						charname: charname,
						charhistory: charhistory
					})
			newChar = await db.select('*').from('chars').where({charhistory: charhistory})	
			return response.json(newChar)
		} catch (error) {
			return response.status(400).json(`Not possible to register: ${error}`) 
		}
	}
};