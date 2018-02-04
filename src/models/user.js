const mongoose = require('mongoose')
const message = require('../locales/messages')
const regex = require('../util/regex')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, msg.validateRequired('email')],
    validate: {
      isAsync: true,
      message: msg.validateDefault('email'),
      validator: (v, cb) =>
        cb(regex.mail.test(v), msg.validateValue('email', v))
    }
  },
  authProvider: {
    type: String,
    required: true,
    enum: ['google']
  },
  authProviderId: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  cardNumber: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['user', 'staff', 'admin']
  },
  admissions: [
    {
      type: ObjectId,
      ref: 'Request'
    }
  ],
  devices: [
    {
      type: ObjectId,
      ref: 'Device'
    }
  ],
  verified: {
    type: Boolean,
    default: false
  },
  resetToken: String
})

module.exports = exports = mongoose.model('User', userSchema)
