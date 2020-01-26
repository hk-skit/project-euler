const nthPrime = require('./index');

describe('Challenge 7: nth prime number', () => {
  [
    { n: 6, prime: 13 },
    { n: 10, prime: 29 },
    { n: 100, prime: 541 },
    { n: 1000, prime: 7919 },
    { n: 10001, prime: 104743 }
  ].forEach(({ n, prime }) => {
    test(`n = ${n}, prime = ${prime}`, () => {
      expect(nthPrime(n)).toBe(prime);
    });
  });
});
