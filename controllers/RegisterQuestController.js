const db = require('../database/connection')

module.exports = {
    async index(request, response) {
        let { questname, questhistory, id } = request.body
        if (!id || !questname || !questhistory) {
            return response
                .status(400)
                .json(
                    'Some of the inputs are empty, please, re-check and try again!'
                )
        }
        let newQuest = await db
            .select('*')
            .from('quests')
            .where({ questname: questname })
        if (newQuest.length > 0) {
            return response
                .status(400)
                .json(
                    'Quest name already exists, come on get creative !! Its the adventure of your dreams!! Go nuts!!!!!! Be a happy squirrell :) '
                )
        }
        try {
            await db(`quests`).insert({
                id: id,
                questname: questname,
                quest: questhistory
            })
            newQuest = await db
                .select('*')
                .from('quests')
                .where({ questname: questname })
            return response.json(newQuest)
        } catch (error) {
            return response
                .status(400)
                .json(`Not possible to register: ${error}`)
        }
    }
}
