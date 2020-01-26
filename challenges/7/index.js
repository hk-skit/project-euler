/**
 * By listing the first six prime numbers:
 * 2, 3, 5, 7, 11, and 13,
 * we can see that the 6th prime is 13.
 *
 * What is the nth prime number?
 *
 */

const nthPrime = n => {
  // All the primes we have.
  const primes = [2];

  let num = 3;
  while (primes.length !== n) {
    let isPrime = true;
    const max = Math.sqrt(num);
    for (let i = 0; primes[i] <= max; i += 1) {
      if (num % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
    num += 2;
  }

  return primes[n - 1];
};

module.exports = nthPrime;
