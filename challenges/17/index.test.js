const numberLetterCounts = require('./index');

describe('Problem 17: Number letter countsPassed', () => {
  [
    { limit: 5, count: 19 },
    { limit: 150, count: 1903 },
    { limit: 1000, count: 21124 }
  ].forEach(({ limit, count }) => {
    test(`limit = ${limit}, count = ${count}`, () => {
      expect(numberLetterCounts(limit)).toEqual(count);
    });
  });
});
