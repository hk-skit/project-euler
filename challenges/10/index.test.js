const sumOfPrimes = require('./index');

describe('Challenge 10: Sum of Primes', () => {
  [
    { num: 17, sum: 41 },
    { num: 2001, sum: 277050 },
    { num: 140759, sum: 873608362 },
    { num: 2000000, sum: 142913828922 }
  ].forEach(({ num, sum }) => {
    test(`num = ${num}, sum = ${sum}`, () => {
      expect(sumOfPrimes(num)).toBe(sum);
    });
  });
});
