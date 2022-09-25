const Router = require('express')
const router = new Router()

const memoController = require("../controllers/memoController")


router.post('/', memoController.create)
router.get('/', memoController.getAll)

module.exports = router