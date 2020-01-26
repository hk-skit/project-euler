/**
 * 2520 is the smallest number that can be divided by each of the numbers from
 * 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of
 * the numbers from 1 to n?
 *
 */

const gcd = (a, b) => {
  //   Euclidean algorithm iterative
  while (a !== 0) {
    [a, b] = [b % a, a];
  }
  return b;

  //   Euclidean algorithm recursive.
  //   if (a === 0) {
  //     return b;
  //   }
  //   return gcd(b % a, a);
};

const smallestMultiple = num => {
  // a * b = lcm * gcd;
  // lcm = (a * b) / gcd
  // lcm(a, b) = a * b / gcd(a, b)
  // lcm(a, b, c) = lcm(lcm(a, b), c);
  // lcm(a, b, c) = lcm( (a * b) / gcd(a, b), c );

  let lcm = 1;
  while (num !== 1) {
    lcm = (lcm * num) / gcd(lcm, num);
    num -= 1;
  }
  return lcm;
};

module.exports = smallestMultiple;
