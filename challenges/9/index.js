/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *  a^2 + b^2 = c^2
 *
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc such that a + b + c = n.
 */
const productOfPythagoreanTriplet = sum => {
  for (let a = 1; a <= sum / 3; a += 1) {
    for (let b = a + 1; b <= sum / 2; b += 1) {
      const c = sum - a - b;
      if (a * a + b * b === c * c) {
        return a * b * c;
      }
    }
  }
  return 0;
};

module.exports = productOfPythagoreanTriplet;
