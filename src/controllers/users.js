const User = require('../models/user')

exports.find = (req, res) => {
  User.find({}, (err, docs) => {
    if (err) return next(err)
    return res.status(200).json(docs)
  })
}
