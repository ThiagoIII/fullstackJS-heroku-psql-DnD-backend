const db = require('../database/connection')
const bcrypt = require('bcrypt');


module.exports = {

	async index(request, response) {
		let { name,  password } = request.body
		if (!name || !password) {
			return response.status(400).json('Some of the inputs are empty')
		}
		try {
			const dataLogin = await db.select('*').from('users').where({name: name})
			if(dataLogin.length > 0){
				console.log('datalogin ===============' , dataLogin)
				const hash1 = dataLogin[0].hash
				const isValid = bcrypt.compareSync(password, hash1) 
				isValid 
					? response.json({id , name } = dataLogin[0]) 
					: response.status(400).json('Password wrong, I will let it slip this time hm!')  
			} else {
				return response.status(400).json('user not found')
			}
			
		} catch (error) {
			console.log('something wrong with the processing of the data inside the server, it could be with de db or with the code processing the data returned from the db, I will log here the db response and the error so you can check whats happening and also ------> :', dataLogin , error)
			return response.status(400).json('something wrong with the processing of the data inside the server, it could be with de db or with the code processing the data returned from the db, I will log here the db response and the error so you can check whats happening and also ------> :', dataLogin , error)
		}
	}
};