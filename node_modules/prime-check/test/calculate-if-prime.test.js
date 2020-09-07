const isPrime = require('../lib/calculate-if-prime')

test('2 is a prime number', () => {
  expect(isPrime(2)).toBe(true)
})

test('3 is a prime number', () => {
  expect(isPrime(3)).toBe(true)
})

test('4 is not a prime number', () => {
  expect(isPrime(4)).toBe(false)
})

test('5 is a prime number', () => {
  expect(isPrime(5)).toBe(true)
})

test('6 is not a prime number', () => {
  expect(isPrime(6)).toBe(false)
})

test('7 is a prime number', () => {
  expect(isPrime(7)).toBe(true)
})

test('Non-whole numbers aren\'t primes', () => {
  expect(isPrime(7.2)).toBe(false)
})

test('Non-whole numbers aren\'t primes', () => {
  expect(isPrime(7.2)).toBe(false)
})

test('Accepts prime number as string and returns true', () => {
  expect(isPrime('2')).toBe(true)
})
