const Router = require('express')
const router = new Router()
const itemController = require('../controllers/itemController')

router.post('/create', itemController.create)
router.get('/', itemController.getAll)
router.get('/:id', itemController.getOne)
router.patch('/update/:id', itemController.update)
router.delete('/:id', itemController.delete)

module.exports = router
