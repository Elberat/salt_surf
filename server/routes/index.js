const Router = require('express')
const router = new Router()
const itemRouter = require('./itemRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const galleryRouter = require('./galleryRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/item', itemRouter)
router.use('/gallery', galleryRouter)

module.exports = router
