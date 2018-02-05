const mongoose = require('mongoose')
const db = mongoose.connection
const app = require('./app')

const serverHost = process.env.SERVER_HOST || '127.0.0.1'
const serverPort = process.env.SERVER_PORT || 8080
const mongodbHost = process.env.MONGODB_HOST || '127.0.0.1'
const mongodbDatabase = process.env.MONGODB_DATABASE || 'test'

mongoose.connect(`mongodb://${mongodbHost}/${mongodbDatabase}`)

db.on('error', err => {
  process.stdout.write(`[MDB] Unknown error: ${err.message}`)
})

db.once('open', () => {
  process.stdout.write(
    `[MDB] Connected to MongoDB server: ${mongodbHost}/${mongodbDatabase}\n`
  )
})

process.on('uncaughtException', err => {
  process.stdout.write(`Fatal error: ${err.message}\n`)
})

app.listen(serverPort, serverHost, () => {
  process.stdout.write(
    `[API] REST server online: ${serverHost}:${serverPort}\n`
  )
})
