/**
 * Project Euler: Problem 21: Amicable numbers
 *
 * Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
 * If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are
 * called amicable numbers.
 *
 * For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110;
 * therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
 *
 * Evaluate the sum of all the amicable numbers under n.
 */

const _sumOfDivisors = n => {
  let sum = 1;
  const limit = Math.floor(n / 2);
  for (let i = 2; i <= limit; i += 1) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
};

const sumOfDivisors = n => {
  let sum = 1;
  let sqrt = Math.ceil(Math.sqrt(n));

  //If the number is a perfect square
  //Count the sqrt once in the sum of factors
  if (n === sqrt ** 2) {
    sum += sqrt;
    sqrt -= 1;
  }
  for (let i = 2; i <= sqrt; i += 1) {
    if (n % i === 0) {
      sum += i + n / i;
    }
  }
  return sum;
};

const sumAmicableNum = n => {
  const map = new Map();
  const pairs = [];
  while (--n > 0) {
    const sum = sumOfDivisors(n);
    const otherHalf = map.get(sum);
    if (otherHalf === n) {
      pairs.push([n, sum]);
    } else {
      map.set(n, sum);
    }
  }
  return [].concat(...pairs).reduce((sum, number) => sum + number, 0);
};

module.exports = sumAmicableNum;
