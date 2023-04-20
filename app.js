const express = require('express');
//const tf = require('@tensorflow/tfjs-node');
// const csv = require('csvtojson');
const fs = require('fs');
const {converToUpperCase} = require('./utils/loadTraining')
//const { body, validationResult } = require('express-validator');
const dotenv = require("dotenv");
const app = express();
const bodyParser = require('body-parser');

const router = require('./routes');
const { Server: HttpServer } = require('http')

const httpServer = new HttpServer(app)

app.use(express.json())
dotenv.config();
const port = process.env.PORT;

app.use(express.static('public'))   
app.use('/', router)
app.use('/guille', router)
httpServer.listen(port, () => {
  console.log(`Train Model Service listening at http://localhost:${port}`);
});

