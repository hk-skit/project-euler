/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the given number?
 *
 */

const _isPrime = num => {
  // Edge cases
  if (num <= 1) {
    return false;
  }

  if (num <= 3) {
    return true;
  }

  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  for (let i = 5; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const isPrime = n => {
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  // All prime number can be represented as 6k + 1 or 6k - 1 except 2 and 3.
  //   But reverse is not true i.e all numbers represented as 6k+-1 are prime eg. 6*4 +1 => 25 not a prime number.
  for (let i = 5; i <= Math.sqrt(n); i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
};

const _largestPrimeFactor = num => {
  if (num <= 1) {
    return null;
  }
  let factor = null;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (isPrime(i) && num % i === 0) {
      factor = i;
    }
  }
  return factor !== null ? factor : num;
};

// Inspired from https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/
const largestPrimeFactor = num => {
  if (num <= 1) {
    return null;
  }
  let maxFactor = null;
  //   eat all 2 factors.
  while (num % 2 === 0) {
    maxFactor = 2;
    num /= 2;
  }

  //   num must be odd by now. That's why increment by 2.
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    //   Eat all odd factors.
    while (num % i === 0) {
      maxFactor = i;
      num /= i;
    }
  }
  // Number itself can be prime.
  return num > 2 ? num : maxFactor;
};

module.exports = largestPrimeFactor;
