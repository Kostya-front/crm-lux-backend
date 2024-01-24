const {Router} = require('express')
const router = Router()

const categoriesController = require('./categoriesController')

router.get('/', (req, res) => categoriesController.getAll(req, res))
router.post('/', (req, res) => categoriesController.create(req, res))
router.patch('/:id', (req, res) => categoriesController.update(req, res))
router.delete('/:id', (req, res) => categoriesController.deleteOne(req,res))


// patch {title} => {title, email, password, description, body}
// put {title, email, password, description, body} => {title, email, password, description, body}


module.exports = router