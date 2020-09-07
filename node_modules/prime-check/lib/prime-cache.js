const primesUnder1000 = require('./primes-under-1000')
const cache = Object.assign({}, primesUnder1000)
const get = (number) => cache[number]

function set (number, boolean) {
  cache[number] = boolean
}

module.exports = {
  get,
  set
}
