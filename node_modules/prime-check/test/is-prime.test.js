const { isPrime, cache } = require('../lib/is-prime')

const lowPrime = 7
const prime = 1013
const nonPrime = 1012

test('Checking if prime with a prime number should return true', () => {
  expect(isPrime(lowPrime)).toEqual(true)
})

test('Checking if prime with a non-prime number should return false', () => {
  expect(isPrime(nonPrime)).toEqual(false)
})

test('Getting a prime from cache after calculating should return true', () => {
  const n = prime
  isPrime(n)
  expect(cache.get(n)).toEqual(true)
})

test('Getting a non-prime from cache after calculating should return false', () => {
  const n = nonPrime
  isPrime(n)
  expect(cache.get(n)).toEqual(false)
})

test('Setting a cache value of a prime to false should wrongly return false', () => {
// This test should show that the cache is working
  const n = prime
  cache.set(n, false)
  expect(isPrime(n)).toEqual(false)
  cache.set(n, true)
})
