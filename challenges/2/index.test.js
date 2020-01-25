const fiboEvenSum = require('./index');

describe('Challenge 2: fiboEvenSum ', () => {
  [
    {
      n: 10,
      sum: 44
    },
    {
      n: 18,
      sum: 3382
    },
    {
      n: 23,
      sum: 60696
    },
    {
      n: 43,
      sum: 350704366
    }
  ].forEach(({ n, sum }) => {
    test(`n = ${n}, sum = ${sum}`, () => {
      expect(fiboEvenSum(n)).toBe(sum);
    });
  });
});
