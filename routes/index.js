const {Router} = require('express')
const router = Router()

const categoriesRoutes = require('../categories/categoriesRoutes')
const advantageRoutes = require('../advantages/advantageRoutes')

router.use('/categories', categoriesRoutes)
router.use('/advantages', advantageRoutes)




module.exports = router