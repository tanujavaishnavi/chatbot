const calculateIfPrime = require('./calculate-if-prime')
const cache = require('./prime-cache')

function getCachedOrCalculate (number) {
  let result = cache.get(number)

  if (result === undefined) {
    result = calculateIfPrime(number)
    cache.set(number, result)
  }

  return result
}

module.exports = {
  isPrime: getCachedOrCalculate,
  cache // Exposed for testing
}
