const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const noteRouter = require('./noteRouter')
const memoRouter = require('./memoRouter')



router.use('/user', userRouter)
router.use('/note', noteRouter)
router.use('/memo', memoRouter)





module.exports = router