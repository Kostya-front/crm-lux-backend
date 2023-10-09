const {Router} = require('express')
const router = Router()

const advantagesController = require('./advantageController')

router.get('/', (req, res) => advantagesController.getAll(req, res))
router.post('/', (req, res) => advantagesController.create(req, res))
router.patch('/:id', (req, res) => advantagesController.update(req, res))
router.delete('/:id', (req, res) => advantagesController.deleteOne(req,res))

module.exports = router