const winston = require('winston').cli()
const msg = require('../locales/messages')

exports.unknownError = (err, req, res, next) => {
  winston.error(`[API] An unknown error occurred: ${err.message}`)
  res.status(500).json({
    errors: [{ message: msg.unknownError() }]
  })
}

exports.notFound = (req, res, next) => {
  res.status(404).json({
    errors: [{ message: msg.notFound() }]
  })
}
