const sumAmicableNum = require('./index');

describe('Problem 21: Amicable numbers', () => {
  [
    { number: 1000, sum: 504 },
    { number: 2000, sum: 2898 },
    { number: 5000, sum: 8442 },
    { number: 10000, sum: 31626 }
  ].forEach(({ number, sum }) => {
    test(`number = ${number}, sum = ${sum}`, () => {
      expect(sumAmicableNum(number)).toEqual(sum);
    });
  });
});
