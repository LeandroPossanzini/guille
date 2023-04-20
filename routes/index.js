const router = require('express').Router()
const getInfo = require('../controllers/controller')
const routerTrain = require('./train')


routerGuille
.get('/', getInfo)
.use('/prueba', routerTrain)



module.exports = routerGuille