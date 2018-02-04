const splitCamelCase = fieldName =>
  fieldName.replace(/([a-z])([A-Z])/g, ' $1 $2').toLowerCase()

exports.validateValue = fieldName =>
  `This is not a valid ${splitCamelCase(fieldName)}: {VALUE}`
exports.validateDefault = fieldName =>
  `The supplied ${splitCamelCase(fieldName)} is not valid.`
exports.validateRequired = fieldName =>
  `The ${splitCamelCase(fieldName)} is required.`
