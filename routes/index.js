const {Router} = require('express')
const router = Router()

const categoriesRoutes = require('../categories/categoriesRoutes')
const advantageRoutes = require('../advantages/advantageRoutes')
const authRoutes = require('../auth/authRoutes')
const authMiddleware = require('../middleware/auth-middleware')
const phoneRoutes = require('../phones/phoneRoutes')
const socialRoutes = require('../socials/socialRoutes')

router.use('/categories', categoriesRoutes)
router.use('/advantages', advantageRoutes)
router.use('/auth', authRoutes)
router.use('/phones', phoneRoutes)
router.use('/socials', socialRoutes)



// refreshToken < 14D            => cookie (httpOnly: true) {}
// accessToken    0.5m - 10m     => localStorage



module.exports = router