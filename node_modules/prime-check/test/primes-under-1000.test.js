const primesUnder1000 = require('../lib/primes-under-1000')
const calculateIfPrime = require('../lib/calculate-if-prime')
const keys = Object.keys(primesUnder1000)
const amountOfPrimesUnder1000 = 168

test('Expect primesUnder1000 to return an object', () => {
  expect(typeof primesUnder1000).toEqual('object')
})

test('Expect first prime under 1000 to be 2', () => {
  expect(keys[0]).toBe('2')
})

test('Expect primesUnder1000 to return an object containing only primes', () => {
  expect(keys.filter(calculateIfPrime).length).toEqual(keys.length)
})

test('Expect primesUnder1000 keys length to equal the total number of primes under 1000', () => {
  expect(keys.length).toEqual(amountOfPrimesUnder1000)
})
