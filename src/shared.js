// object to store values in module
const shared = {}

// storage class
function Storage(storage) {
  // the name of the storage
  this.storage = storage

  // creates storage if it does not exist
  if (!shared[this.storage]) {
    shared[this.storage] = {}
  }

  // returns a property from the storage
  this.get = function(prop) {
    if (prop) {
      return shared[this.storage][prop]
    }
    return shared[this.storage]
  }

  // assings a value to a property in the storage
  this.set = function(prop, val) {
    shared[this.storage][prop] = val
    return this
  }

  // destroys a storage
  this.destroy = function() {
    // is set to undefined as the delete operator does not always work reliably
    shared[this.storage] = undefined
    return this
  }

  // clears all values inside storage
  this.reset = function() {
    shared[this.storage] = {}
  }

  // returns current context
  return this
}

// connect to shared storage
exports.connect = storage => new Storage(storage)

// return copy of raw shared object with all storages
exports.getRaw = () => Object.assign({}, shared)
