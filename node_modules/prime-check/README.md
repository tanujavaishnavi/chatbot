# Prime Check

Small and efficient NPM package for checking if a number is prime. Existing packages seemed to not cache or in the case they did would build up the primes via the Sieve of Erathosthenes. This package will tell you if a number is prime, but not allow discovery of next/previous primes. The first 1000 are hard-coded as I am under the impression those will be the most frequently looked for.

## Usage
```
const isPrime = require('prime-check')
isPrime(1) // false
isPrime(3) // true
```

## Getting Started

To run this module install it into your project by running:
`npm i --save prime-check`

### Prerequisites

Ensure node is above version 6.4 as the package contains ES2015 Syntax


## Running the tests

To work on this further you can watch-files and run tests after changes are made with the command:
`npm run dev`

## Authors

* **Jake Rowsell** - *Initial work* - [JakeRowsell89](https://github.com/JakeRowsell89)

## Acknowledgments

* Readme structure taken from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md
