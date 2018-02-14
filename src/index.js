const mongoose = require('mongoose')
const winston = require('winston').cli()
const dotenv = require('dotenv').config()
const status = require('./shared').connect('status')
const app = require('./app')

const server = {
  host: process.env.SERVER_HOST || '127.0.0.1',
  port: parseInt(process.env.SERVER_PORT) || 8080
}
const mongodbEvents = ['connected', 'disconnected', 'error']
const mongodbUrl = process.env.MONGODB_URL || 'mongodb://localhost/test'
const mongodbOptions = {
  useMongoClient: true,
  autoReconnect: true,
  reconnectInterval: 100,
  reconnectTries: Number.MAX_VALUE
}

mongodbEvents.forEach(event => {
  mongoose.connection.on(event, () => {
    const message = `[MDB] Database status: ${event}`
    switch (event) {
      case 'disconnected':
        winston.warn(message)
        status.set('mongodb', event)
        break
      case 'error':
        winston.error(message)
        status.set('mongodb', event)
        break
      default:
        winston.info(message)
        status.set('mongodb', event)
    }
  })
})

mongoose.Promise = global.Promise
mongoose
  .connect(mongodbUrl, mongodbOptions)
  .then(() => {
    status.set('initialDatabaseConnectionFailed', false)
  })
  .catch(err => {
    winston.warn('[MDB] Reconnecting after initial connection error ...')
    status.set('initialDatabaseConnectionFailed', true)
  })

app.listen(server.port, server.host, () => {
  const { host, port } = server
  winston.info(`[API] REST server online: ${host}:${port}`)
})
