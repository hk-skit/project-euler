/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below n.
 * @param {*} num
 */
const _sumOfPrimes = num => {
  if (num < 2) {
    return 0;
  }

  const primes = [2];
  let sum = 2;
  let next = 3;
  while (next < num) {
    let isPrime = true;
    const sqrt = Math.sqrt(next);
    for (let i = 0; primes[i] <= sqrt; i += 1) {
      if (next % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      sum += next;
      primes.push(next);
    }
    next += 2;
  }
  return sum;
};

// Using Sieve of Eratosthenes O(n*log(log(n)))
// https://www.geeksforgeeks.org/sieve-of-eratosthenes/
const sumOfPrimes = num => {
  const sieve = [...Array(num)].fill(true);
  for (let p = 2; p * p < sieve.length; p += 1) {
    // Number is prime;
    if (sieve[p] === true) {
      // set all the multiple to false
      for (let k = p * p; k < sieve.length; k += p) {
        sieve[k] = false;
      }
    }
  }
  let sum = 0;
  for (let i = 2; i < sieve.length; i += 1) {
    sum = sieve[i] ? sum + i : sum;
  }
  return sum;
};

module.exports = sumOfPrimes;
