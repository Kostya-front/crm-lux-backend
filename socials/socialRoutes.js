const {Router} = require('express')
const router = Router()

const socialController = require('./socialCotroller')

router.get('/', (req, res) => socialController.getAll(req, res))
router.post('/', (req, res) => socialController.create(req, res))

module.exports = router