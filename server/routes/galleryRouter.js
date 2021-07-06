const Router = require('express')
const router = new Router()
const galleryController = require('../controllers/galleryController')

router.post('/create', galleryController.create)
router.get('/', galleryController.getAll)
router.delete('/:id', galleryController.delete)

module.exports = router
