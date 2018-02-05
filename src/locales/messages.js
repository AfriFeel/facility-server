const splitCamelCase = fieldName => {
  return fieldName.replace(/([a-z])([A-Z])/g, ' $1 $2').toLowerCase()
}

exports.validateValue = (fieldName, value) => {
  return `This is not a valid ${splitCamelCase(fieldName)}: ${value}`
}

exports.validateDefault = fieldName => {
  return `The supplied ${splitCamelCase(fieldName)} is not valid.`
}

exports.validateRequired = fieldName => {
  return `The ${splitCamelCase(fieldName)} is required.`
}

exports.unknownError = () => {
  return 'An unknown error occurred.'
}

exports.notFound = () => {
  return 'The requested ressource could not be found.'
}
