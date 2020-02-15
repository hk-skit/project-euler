/**
 * Project Euler: Problem 20: Factorial digit sum
 * n! means n × (n − 1) × ... × 3 × 2 × 1
 *
 * For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
 * and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
 *
 * Find the sum of the digits n!
 */
const add = (a, b) => {
  a = `${a}`;
  b = `${b}`;
  if (a.length > b.length) {
    [a, b] = [b, a];
  }
  a = a.padStart(b.length, '0');
  let result = '';
  let carry = 0;
  for (let i = a.length - 1; i >= 0; i -= 1) {
    const sum = +a[i] + +b[i] + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }
  return carry ? `${carry}${result}` : result;
};

const multiply = (a, b) => {
  a = `${a}`;
  b = `${b}`;
  if (a.length > b.length) {
    [a, b] = [b, a];
  }
  a = a.padStart(b.length, '0');

  let result = '0';

  for (let i = a.length - 1; i >= 0; i -= 1) {
    if (a[i] === '0') {
      continue;
    }
    let product = '';
    let carry = 0;
    for (let j = b.length - 1; j >= 0; j -= 1) {
      const p = a[i] * b[j] + carry;
      product = (p % 10) + product;
      carry = Math.floor(p / 10);
    }
    product = carry ? `${carry}${product}` : `${product}`;
    product = product + '0'.repeat(a.length - 1 - i);
    result = add(result, product);
  }
  return result;
};

const sumFactorialDigits = n => {
  let fact = 1;
  while (n > 1) {
    fact = multiply(fact, n);
    n -= 1;
  }
  let sum = 0;
  for (const d of `${fact}`) {
    sum += +d;
  }
  return sum;
};

module.exports = sumFactorialDigits;
