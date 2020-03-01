const sumOfNonAbundantNumbers = require('./index');

describe('Problem 23: Non-abundant sums', () => {
  [
    { number: 10000, sum: 3731004 },
    { number: 15000, sum: 4039939 },
    { number: 20000, sum: 4159710 },
    { number: 28123, sum: 4179871 }
  ].forEach(({ number, sum }) => {
    test(`number = ${number}, sum = ${sum}`, () => {
      expect(sumOfNonAbundantNumbers(number)).toEqual(sum);
    });
  });
});
