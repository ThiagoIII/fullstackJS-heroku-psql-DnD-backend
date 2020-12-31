const express = require('express')
const DiscoverCharsAndAdvs = require('./controllers/DiscoverCharsAndAdvs')
const FetchUserDataController = require('./controllers/FetchUserDataController')
const LoginController = require('./controllers/LoginController')
const RegisterChar = require('./controllers/RegisterChar')
const RegisterQuest = require('./controllers/RegisterQuestController')
const RegisterController = require('./controllers/RegisterController')

const router = express.Router()

router.get('/discoverCharsAndAdvs', DiscoverCharsAndAdvs.index)

router.post('/fetchUserData', FetchUserDataController.index)
router.post('/register', RegisterController.index)
router.post('/login', LoginController.index)
router.post('/registerchar', RegisterChar.index)
router.post('/registerquest', RegisterQuest.index)

module.exports = router
