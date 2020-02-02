/**
 * Project Euler: Problem 14: Longest Collatz sequence
 * The following iterative sequence is defined for the set of positive integers:
 *
 * n → n/2 (n is even)
 * n → 3n + 1 (n is odd)
 *
 * Using the rule above and starting with 13, we generate the following sequence:
 *
 * 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 *
 * It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
 * Although it has not been proved yet (Collatz Problem), it is thought that all starting
 * numbers finish at 1.
 *
 * Which starting number, under the given limit, produces the longest chain?
 *
 * NOTE: Once the chain starts the terms are allowed to go above one million.
 */

const collatzLengthRecursive = n => {
  if (n === 1) {
    return 1;
  }
  return 1 + collatzLengthRecursive(n % 2 === 0 ? n / 2 : 3 * n + 1);
};

const collatzCached = n => {
  collatzCached.cache = collatzCached.cache || { 1: 1 };
  const { cache } = collatzCached;
  if (cache[n]) {
    return cache[n];
  }
  cache[n] = 1 + collatzCached(n % 2 === 0 ? n / 2 : 3 * n + 1);
  return cache[n];
};

const collatzLength = n => {
  let count = 1;
  while (n !== 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
    count += 1;
  }
  return count;
};

const longestCollatzSequence = limit => {
  let maxLength = 0;
  let maxStart = 0;
  let start = 1;
  while (start <= limit) {
    const length = collatzLength(start);
    if (maxLength < length) {
      maxLength = length;
      maxStart = start;
    }
    start += 1;
  }
  return maxStart;
};

module.exports = longestCollatzSequence;
