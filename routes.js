const express = require('express');
const DiscoverCharsAndAdvs = require('./controllers/DiscoverCharsAndAdvs');
const FetchUserDataController = require('./controllers/FetchUserDataController');
const HomeController = require('./controllers/HomeController');
const LoginController = require('./controllers/LoginController');
const RegisterChar = require('./controllers/RegisterChar');
const RegisterController = require('./controllers/RegisterController');

const router = express.Router()

router.get('/', HomeController.index )
router.get('/register', (req, res) => {	res.send('register')})
router.get('/user', (req, res) => {	res.send('user')})
router.get('/discoverCharsAndAdvs', DiscoverCharsAndAdvs.index)
router.get('/fetchUserData', FetchUserDataController.index)


router.post('/register', RegisterController.index)
router.post('/login', LoginController.index)
router.post('/registerChar', RegisterChar.index)


module.exports = router