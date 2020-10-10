const knex = require('knex');

const db = knex({
		client: 'pg',
		connection: {
			host: '127.0.0.1',
			user: 'postgres',
			password: '1@2B3c4d5e',
			database: 'DnD'
		}
	}); 

module.exports = db
