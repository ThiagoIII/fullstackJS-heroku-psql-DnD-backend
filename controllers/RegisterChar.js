const db = require('../database/connection')

module.exports = {

	async index(request, response) {
		let { charname, charhistory, id } = request.body
		if (!id || !charname || !charhistory) {
			return 'error, some of the inputs are empty' 
		}
		try {
			await db(`chars`)
				.insert({
					id: id,
					charname: charname,
					charhistory: charhistory
				})
			let newChar = await db.select('*')
				.from('chars')
				.where({charhistory: charhistory})	
			return response.json(newChar)
		} catch (error) {
			return response.status(400).json(`Not possible to register: ${error}`) 
		}
	}
};