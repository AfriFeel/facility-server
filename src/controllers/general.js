const winston = require('winston').cli()
const status = require('../shared').connect('status')
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

exports.status = (req, res, next) => {
  res.status(200).json(status.get())
}
