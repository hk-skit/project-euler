const countingSundays = require('./index');

describe('Problem 19: Counting Sundays', () => {
  [
    { firstYear: 1943, lastYear: 1946, sundays: 6 },
    { firstYear: 1995, lastYear: 2000, sundays: 10 },
    { firstYear: 1901, lastYear: 2000, sundays: 171 }
  ].forEach(({ firstYear, lastYear, sundays }) => {
    test(`firstYear = ${firstYear}, lastYear = ${lastYear}`, () => {
      expect(countingSundays(firstYear, lastYear)).toEqual(sundays);
    });
  });
});
