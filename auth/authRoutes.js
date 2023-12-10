const {Router} = require('express')
const router = Router()

const authController = require('./authController')


router.post('/register', (req, res) => authController.register(req, res))
router.post('/login', async (req, res) => await authController.login(req, res))
router.post('/set-password', (req, res) => authController.setPassword(req, res))
router.get('/refresh', (req, res) => authController.refresh(req, res))

module.exports = router