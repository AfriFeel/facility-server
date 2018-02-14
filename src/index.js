const mongoose = require('mongoose')
const winston = require('winston').cli()
const dotenv = require('dotenv').config()
const app = require('./app')

const server = {
  host: process.env.SERVER_HOST || '127.0.0.1',
  port: parseInt(process.env.SERVER_PORT) || 8080
}
const mongodbUrl = process.env.MONGODB_URL || 'mongodb://localhost/test'
const mongodbOptions = {
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  promiseLibrary: global.Promise
}
const mongodbEvents = [
  'connecting',
  'connected',
  'open',
  'disconnecting',
  'disconnected',
  'close',
  'reconnected'
]

mongodbEvents.forEach(event => {
  mongoose.connection.on(event, () => {
    winston.info(`[MDB] Database status: ${event}`)
  })
})

mongoose.connection.on('error', () => {
  winston.error('[MDB] Database status: error')
})

mongoose.Promise = global.Promise
mongoose.connect(mongodbUrl, mongodbOptions).catch(err => {})

app.listen(server.port, server.host, () => {
  const { host, port } = server
  winston.info(`[API] REST server online: ${host}:${port}`)
})
