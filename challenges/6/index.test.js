const subSquareDifference = require('./index');

describe('Challenge 6: Sum square difference', () => {
  [
    { num: 10, diff: 2640 },
    { num: 20, diff: 41230 },
    { num: 100, diff: 25164150 }
  ].forEach(({ num, diff }) =>
    test(`num = ${num}, diff = ${diff}`, () =>
      expect(subSquareDifference(num)).toBe(diff))
  );
});
