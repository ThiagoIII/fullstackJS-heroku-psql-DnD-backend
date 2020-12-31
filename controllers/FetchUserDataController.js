const db = require('../database/connection')

module.exports = {
    async index(request, response) {
        const { id } = request.body
        console.log('ID SENT TO SERVER =======>>>>>>>>>>>', request.body)
        if (id !== {} && id !== null && id !== undefined) {
            try {
                const userExist = await db
                    .select('*')
                    .from(`users`)
                    .where({ id: id })
                if (userExist.length > 0) {
                    const chars = await db
                        .select('*')
                        .from(`chars`)
                        .where({ id: id }) //return an array of objects or empty if nothing is there
                    const quests = await db
                        .select('*')
                        .from(`quests`)
                        .where({ id: id }) //same as the chars one
                    const charsAndQuests = [chars, quests] //part of my crazy "logic"
                    return response.status(200).json(charsAndQuests)
                } else {
                    return response
                        .status(400)
                        .json(
                            'It appears that there is no user with that ID. Huh ?!? Crazy right ? I am sure that something has broken but its already good! Would you be kind enough to try again, please ? Thank you very mushroom (sounds like much, get it ?)!'
                        )
                }
            } catch (error) {
                return response
                    .status(400)
                    .json(
                        'Something went wrong fetching the info from the database or with the processing of data. Please try again',
                        error
                    )
            }
        } else {
            return response
                .status(400)
                .json(
                    'Uh oh! It seems that we maybe broke something, we could not sent your ID to the database, would, please, try again ? Thanks! You are the best!'
                )
        }
    }
}
