/**
 * The sum of the squares of the first ten natural numbers is,
 *      1^2 + 2^2 + ... + 10^2 = 385
 * The square of the sum of the first ten natural numbers is,
 *      (1 + 2 + ... + 10)^2 = 55^2 = 3025
 * Hence the difference between the sum of the squares of the
 * first ten natural numbers and the square of the sum is
 *      3025 − 385 = 2640.
 * Find the difference between the sum of the squares of the
 * first n natural numbers and the square of the sum.
 *
 * @param {*} num
 */
const subSquareDifference = num => {
  // Sum of the first n natural number
  // n * (n + 1) / 2
  const sum = (num * (num + 1)) / 2;

  // Sum of the squares of the first n natural number.
  // n * (n + 1) * (2n + 1) / 6
  const sumOfSquares = (num * (num + 1) * (2 * num + 1)) / 6;

  return sum * sum - sumOfSquares;
};

module.exports = subSquareDifference;
