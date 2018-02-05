const express = require('express')
const loadControllers = require('./controllers')

const app = express()

loadControllers(app)

module.exports = exports = app
