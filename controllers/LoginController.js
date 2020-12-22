const db = require('../database/connection')
const bcrypt = require('bcrypt');


module.exports = {

	async index(request, response) {
		let { name,  password } = request.body
		if (!name || !password) {
			return response.status(400).json('Some of the inputs are empty')
		}
		try {
			const dataLogin = await db.select('*').from('users').where({name: name}) //returns a object with id, name, email, hash and joined date.
			if(dataLogin.length > 0){
				const hash1 = dataLogin[0].hash
				const isValid = bcrypt.compareSync(password, hash1) 
				if (isValid) {
					let dataFiltered = ( ({ id, name }) => ({ id, name }) )(dataLogin[0]) // IIFE with destructuring and shorthand object assignment
					return  response.status(200).json(dataFiltered) 
				} else {
					return response.status(400).json('Wrong password, I will let it slip this time hm! Now check it really carefully and remember to look at your surroundings when inserting your password!') 
				}
			} else {
				return response.status(400).json('Sorry but we could not find your username in our database, maybe you made a mistake, perhaps mispelled it ? Would you be so kind to, please, try again?')
			}
			
		} catch (error) {
			console.log('something wrong with the processing of the data inside the server, it could be with de db or with the code processing the data returned from the db, I will log here the db response and the error so you can check whats happening and also ------> :', dataLogin , error)
			return response.status(400).json('something wrong with the processing of the data inside the server, it could be with de db or with the code processing the data returned from the db, I will log here the db response and the error so you can check whats happening and also ------> :', dataLogin , error)
		}
	}
};