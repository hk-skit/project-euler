const productOfPythagoreanTriplet = require('./index');

describe('Challenge 9: Special Pythagorean triplet', () => {
  [
    { sum: 1000, product: 31875000 },
    { sum: 24, product: 480 },
    { sum: 120, product: 49920 }
  ].forEach(({ sum, product }) =>
    test(`sum = ${sum}, product = ${product}`, () => {
      expect(productOfPythagoreanTriplet(sum)).toBe(product);
    })
  );
});
