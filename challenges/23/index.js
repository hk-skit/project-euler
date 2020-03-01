/**
 * Project Euler: Problem 23: Non-abundant sums
 *
 * A perfect number is a number for which the sum of its proper divisors is
 * exactly equal to the number. For example, the sum of the proper divisors of 28
 * would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
 * A number n is called deficient if the sum of its proper divisors is less
 * than n and it is called abundant if this sum exceeds n.
 *
 * As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number
 * that can be written as the sum of two abundant numbers is 24. By mathematical
 * analysis, it can be shown that all integers greater than 28123 can be written
 * as the sum of two abundant numbers. However, this upper limit cannot be reduced
 * any further by analysis even though it is known that the greatest number that
 * cannot be expressed as the sum of two abundant numbers is less than this limit.
 *
 * Find the sum of all positive integers <= n which cannot be written as the sum
 * of two abundant numbers.
 *
 * */

const createSieveOfPrimes = limit => {
  const sieve = Array(limit).fill(true);
  for (let p = 2; p * p < sieve.length; p += 1) {
    // Number is prime;
    if (sieve[p] === true) {
      // set all the multiple to false
      for (let k = p * p; k < sieve.length; k += p) {
        sieve[k] = false;
      }
    }
  }
  return sieve
    .map((v, i) => (v ? i : v))
    .filter(v => v)
    .slice(1);
};

const computeAbundantNumbers = () => {
  const primes = createSieveOfPrimes(28123);
  const numbers = [];
  for (let i = 12; i <= 28123; i += 1) {
    if (sumOfFactors(i, primes) > i) {
      numbers.push(i);
    }
  }
  return numbers;
};

const sumOfFactors = (number, primeList) => {
  let n = number;
  let sum = 1;
  let p = primeList[0];
  let j;
  let i = 0;
  while (p * p <= n && n > 1 && i < primeList.length) {
    p = primeList[i];
    i++;
    if (n % p == 0) {
      j = p * p;
      n = n / p;
      while (n % p == 0) {
        j = j * p;
        n = n / p;
      }
      sum = (sum * (j - 1)) / (p - 1);
    }
  }

  //A prime factor larger than the square root remains, so add that
  if (n > 1) {
    sum *= n + 1;
  }
  return sum - number;
};

const sumOfNonAbundantNumbers = number => {
  const abundantNums = computeAbundantNumbers();

  const sums = new Set();

  for (let i = 0; i < abundantNums.length; i += 1) {
    for (let j = 0; j < abundantNums.length; j += 1) {
      sums.add(abundantNums[i] + abundantNums[j]);
    }
  }

  let sum = Array.from(
    { length: Math.min(number, 23) },
    (_, index) => index + 1
  ).reduce((sum, n) => sum + n);

  let limit = Math.min(number, 28123);

  for (let i = 25; i <= limit; i += 1) {
    if (!sums.has(i)) {
      sum += i;
    }
  }
  return sum;
};

module.exports = sumOfNonAbundantNumbers;
