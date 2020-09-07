const primeCache = require('../lib/prime-cache')
const prime = 1013
const nonPrime = 1014

test('Prime cache is an object', () => {
  expect(typeof primeCache).toEqual('object')
})

test('Prime cache allows to get a prime number', () => {
  expect(typeof primeCache.get).toEqual('function')
})

test('Prime cache allows to get a prime number', () => {
  expect(typeof primeCache.set).toEqual('function')
})

test('Getting a prime that was not set should return undefined', () => {
  expect(primeCache.get(prime)).toEqual(undefined)
})

test('Setting a prime and getting a prime should return true', () => {
  primeCache.set(prime, true)
  expect(primeCache.get(prime)).toEqual(true)
})

test('Setting a non-prime and getting that number should return false', () => {
  primeCache.set(nonPrime, false)
  expect(primeCache.get(nonPrime)).toEqual(false)
})
