require('dotenv').config() // dotenv for reading dir
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const fileUpload = require('express-fileupload')
const cors = require('cors') // для отправки запросов с браузера
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')
const {resolve} = require("path");


const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(resolve(__dirname, 'static')));
app.use(fileUpload({}))
app.use('/api', router)

// оброботка ошибок, последний middleware
app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate() // подключение к бд
        await sequelize.sync() // сверяет состояние базы данных со схемой данных
        app.listen(PORT, () => console.log(`Server has been started on ${PORT} PORT`))
    } catch (e){
        console.log(e)
    }
}

start()

