const express = require('express')
const loadMiddlewares = require('./middlewares')
const loadControllers = require('./controllers')

const app = express()

loadMiddlewares(app)
loadControllers(app)

module.exports = exports = app
