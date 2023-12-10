const {Router} = require('express')
const router = Router()

const categoriesRoutes = require('../categories/categoriesRoutes')
const advantageRoutes = require('../advantages/advantageRoutes')
const authRoutes = require('../auth/authRoutes')
const authMiddleware = require('../middleware/auth-middleware')



router.use('/categories', authMiddleware, categoriesRoutes)
router.use('/advantages', authMiddleware, advantageRoutes)
router.use('/auth', authRoutes)



// refreshToken < 14D            => cookie (httpOnly: true) {}
// accessToken    0.5m - 10m     => localStorage



module.exports = router