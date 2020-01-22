const sumOfMultipleOf3Or5 = require('./index');

describe('Day 1: sumOfMultipleOf3Or5', () => {
  [
    {
      n: 0,
      sum: 0
    },
    {
      n: 1000,
      sum: 233168
    },
    {
      n: 49,
      sum: 543
    },
    {
      n: 19564,
      sum: 89301183
    },
    {
      n: 8456,
      sum: 16687353
    }
  ].forEach(({ n, sum }) => {
    test(`n = ${n}, sum = ${sum}`, () => {
      expect(sumOfMultipleOf3Or5(n)).toBe(sum);
    });
  });
});
