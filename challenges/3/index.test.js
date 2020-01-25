const largestPrimeFactor = require('./index');

describe('Challenge 3: Largest Prime Factor', () => {
  [
    { n: 2, primeFactor: 2 },
    { n: 3, primeFactor: 3 },
    { n: 5, primeFactor: 5 },
    { n: 7, primeFactor: 7 },
    { n: 13195, primeFactor: 29 },
    { n: 600851475143, primeFactor: 6857 }
  ].forEach(({ n, primeFactor }) => {
    test(`n = ${n}, primeFactor = ${primeFactor}`, () => {
      expect(largestPrimeFactor(n)).toBe(primeFactor);
    });
  });
});
