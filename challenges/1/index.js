/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below the provided
 * parameter value number.
 */

/**
 * Brute force solution.
 * @param {number} n
 */
const _sumOfMultipleOf3Or5 = n => {
  let sum = 0;
  while (--n > 0) {
    if (n % 3 === 0 || n % 5 === 0) {
      sum += n;
    }
  }
  return sum;
};

const sumOfMultipleOfX = (n, x) => {
  // We need to be clever while calculating the sumOfMultipleOfX otherwise our solution
  // will be slower than brute force solution.
  // We can use arithmetic progression to calculate the sum.
  // 3 + 6 + 9 + .... + N
  // 3 * (1 + 2 + 3 .... + N/3)
  const terms = Math.floor((n - 1) / x);
  // Some of n terms of an AP -> n * (n + 1) / 2.
  return (x * (terms * (terms + 1))) / 2;
};

/**
 *
 * @param {*} n
 */
const sumOfMultipleOf3Or5 = n => {
  // Instead of checking divisibility of every number what if we do
  // sumOfMultipleOf3 + sumOfMultipleOf5 - sumOfMultipleOf15
  return (
    sumOfMultipleOfX(n, 3) + sumOfMultipleOfX(n, 5) - sumOfMultipleOfX(n, 15)
  );
};

module.exports = sumOfMultipleOf3Or5;
