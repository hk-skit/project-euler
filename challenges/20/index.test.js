const sumFactorialDigits = require('./index');

describe('Problem 20: Factorial digit sum', () => {
  [
    { number: 10, sum: 27 },
    { number: 25, sum: 72 },
    { number: 50, sum: 216 },
    { number: 75, sum: 432 },
    { number: 100, sum: 648 }
  ].forEach(({ number, sum }) => {
    test(`number = ${number}, sum = ${sum}`, () => {
      expect(sumFactorialDigits(number)).toEqual(sum);
    });
  });
});
