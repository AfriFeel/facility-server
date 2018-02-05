const mongoose = require('mongoose')
const winston = require('winston').cli()
const dotenv = require('dotenv').config()
const db = mongoose.connection
const app = require('./app')

const server = {
  host: process.env.SERVER_HOST || '127.0.0.1',
  port: parseInt(process.env.SERVER_PORT) || 8080
}
const mongodbUrl = process.env.MONGODB_URL || 'mongodb://localhost/test'

mongoose.connect(`${mongodbUrl}`).catch(err => {
  winston.error(`[MDB] Connecting failed.`)
})

db.on('error', err => {
  const { message, stack } = err
  winston.error(`[MDB] Unknown error:\n${stack.replace(/\t/g, '')}`)
})

db.once('open', () => {
  const { host, db } = mongodb
  winston.info(`[MDB] Connected to MongoDB server: ${mongodbUrl}`)
})

process.on('uncaughtException', err => {
  winston.error(`Fatal error: ${err.message}`)
})

app.listen(server.port, server.host, () => {
  const { host, port } = server
  winston.info(`[API] REST server online: ${host}:${port}`)
})
