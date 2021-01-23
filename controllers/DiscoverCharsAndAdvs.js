const db = require('../database/connection')

module.exports = {
    async index(request, response) {
        try {
            const dataChars = await db.select('*').from(`chars`)
            const dataAdvs = await db.select('*').from(`quests`)
            const dataCharsAndAdvs = [dataChars, dataAdvs] // so [ [chars] , [advs] ], two arrays inside a big one
            return response.json(dataCharsAndAdvs)
        } catch (error) {
            return response
        }
    }
}
