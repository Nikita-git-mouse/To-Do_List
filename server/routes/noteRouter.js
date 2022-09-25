const Router = require('express')
const router = new Router()

const noteController = require("../controllers/noteController")


router.post('/', noteController.create)
router.get('/', noteController.getAll)
router.get('/', noteController.getOne)
//router.delete('/', noteController.DelSomeOne )

module.exports = router