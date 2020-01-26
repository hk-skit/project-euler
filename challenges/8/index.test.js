const largestProductInASeries = require('./index');

describe('Challenge 8: Largest product in a series', () => {
  [
    { digits: 4, product: 5832 },
    { digits: 13, product: 23514624000 }
  ].forEach(({ digits, product }) => {
    test(`digits = ${digits}, product = ${product}`, () => {
      expect(largestProductInASeries(digits)).toBe(product);
    });
  });
});
