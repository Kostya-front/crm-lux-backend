const {Router} = require('express')
const router = Router()

const phoneController = require('./phoneCotroller')

router.get('/', (req, res) => phoneController.getAll(req, res))
router.post('/', (req, res) => phoneController.create(req, res))

module.exports = router