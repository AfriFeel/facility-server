const mongoose = require('mongoose')
const msg = require('../locales/messages')
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
        cb(regex.email.test(v), msg.validateValue('email', v))
    }
  },
  authProvider: {
    type: String,
    enum: ['google'],
    required: [true, msg.validateRequired('authProvider')]
  },
  authProviderId: {
    type: String,
    required: [true, msg.validateRequired('authProviderId')]
  },
  avatar: {
    type: String,
    required: [true, msg.validateRequired('avatar')]
  },
  firstName: {
    type: String,
    required: [true, msg.validateRequired('firstName')]
  },
  lastName: {
    type: String,
    required: [true, msg.validateRequired('lastName')]
  },
  cardNumber: {
    type: Number,
    required: [true, msg.validateRequired('cardNumber')]
  },
  role: {
    type: String,
    enum: ['user', 'staff', 'admin'],
    required: [true, msg.validateRequired('role')]
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
