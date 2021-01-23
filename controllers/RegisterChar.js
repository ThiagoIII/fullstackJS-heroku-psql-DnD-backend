const db = require('../database/connection')

module.exports = {
    async index(request, response) {
        let { charname, charhistory, id } = request.body
        if (!id || !charname || !charhistory) {
            return response
                .status(400)
                .json(
                    'Some of the inputs are empty, please, re-check and try again!'
                )
        }
        try {
            let newChar = await db
                .select('*')
                .from('chars')
                .where({ charname: charname })
            if (newChar.length > 0) {
                return response
                    .status(400)
                    .json(
                        'Uh! Sorry but it seems that this super epic hero or not char name its already taken! Would you be so kind to give it another go ? Think Chuck Norris + Agamemnon, like Chagamem Nonnis!'
                    )
            }

            await db(`chars`).insert({
                id: id,
                charname: charname,
                charhistory: charhistory
            })
            newChar = await db
                .select('*')
                .from('chars')
                .where({ charhistory: charhistory })
            return response.json(newChar)
        } catch (error) {
            return response
                .status(400)
                .json(`Not possible to register: ${error}`)
        }
    }
}
