const smallestMultiple = require('./index');

describe('Challenge 5: Smallest multiplication', () => {
  [
    { num: 5, multiple: 60 },
    { num: 7, multiple: 420 },
    { num: 10, multiple: 2520 },
    { num: 13, multiple: 360360 },
    { num: 20, multiple: 232792560 }
  ].forEach(({ num, multiple }) =>
    test(`num = ${num}, multiple = ${multiple}`, () => {
      expect(smallestMultiple(num)).toBe(multiple);
    })
  );
});
