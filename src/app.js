const express = require('express')

const app = express()

app.get('/v1.0/messages/hello-world', (req, res, next) => {
  return res.status(200).json({ message: 'Hello, World!' })
})

module.exports = exports = app
