const divisibleTriangleNumber = require('./index');

describe('Challenge 12 :  Highly Divisible Triangle Number', () => {
  [
    { num: 5, triangleNumber: 28 },
    { num: 23, triangleNumber: 630 },
    { num: 167, triangleNumber: 1385280 },
    { num: 374, triangleNumber: 17907120 },
    { num: 500, triangleNumber: 76576500 }
  ].forEach(({ num, triangleNumber }) => {
    test(``, () => {
      expect(divisibleTriangleNumber(num)).toBe(triangleNumber);
    });
  });
});
