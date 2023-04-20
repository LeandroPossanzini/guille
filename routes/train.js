const routerTrain = require('express').Router();
const trainModel = require('../controllers/controller')

routerTrain
.post('/1', trainModel)

module.exports = routerTrain