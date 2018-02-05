const Router = require('express').Router
const users = require('./users')
const general = require('./general')

module.exports = exports = app => {
  const userRouter = Router()
  userRouter.get('/users', users.find)

  app.use('/api/v1', userRouter)
  app.use(general.notFound)
  app.use(general.unknownError)
}
