const powerDigitSum = require('./index');

describe('Problem 16: Power digit sum', () => {
  [
    { exponent: 15, sum: 26 },
    { exponent: 128, sum: 166 },
    { exponent: 1000, sum: 1366 }
  ].forEach(({ exponent, sum }) => {
    test(`exponent = ${exponent}, sum = ${sum}`, () => {
      expect(powerDigitSum(exponent)).toEqual(sum);
    });
  });
});
