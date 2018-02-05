const winstonMiddleware = require('./winston')

module.exports = exports = app => {
  app.use(winstonMiddleware)
}
