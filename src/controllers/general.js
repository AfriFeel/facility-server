const winston = require('winston').cli()
const msg = require('../locales/messages')

exports.unknownError = (err, req, res, next) => {
  const { stack } = err
  winston.error(`[API] Unknown error: ${stack.replace(/\t/g, '')}`)
  res.status(500).json({
    errors: [{ message: msg.unknownError() }]
  })
}

exports.notFound = (req, res, next) => {
  res.status(404).json({
    errors: [{ message: msg.notFound() }]
  })
}
