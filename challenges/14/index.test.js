const largestCollatzSequence = require('./index');

describe('Challenge 14: Longest Collatz sequence', () => {
  [
    { limit: 14, start: 9 },
    { limit: 5847, start: 3711 },
    { limit: 46500, start: 35655 },
    { limit: 54512, start: 52527 },
    { limit: 100000, start: 77031 }
  ].forEach(({ limit, start }) => {
    test(`limit = ${limit}, start = ${start}`, () => {
      expect(largestCollatzSequence(limit)).toEqual(start);
    });
  });
});
