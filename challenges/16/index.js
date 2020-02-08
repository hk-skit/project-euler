/**
 * Project Euler: Problem 16: Power digit sum
 * 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 *
 * What is the sum of the digits of the number 2^exponent?
 *
 */
const multiply = (number, multiplier) => {
  let carry = 0;
  let result = '';
  for (let i = number.length - 1; i >= 0; i -= 1) {
    const product = number[i] * multiplier + carry;
    const digit = product % 10;
    result = digit + result;
    carry = Math.floor(product / 10);
  }

  return carry === 0 ? result : carry + result;
};

const powerDigitSum = (exponent, n = 2) => {
  let result = '1';
  while (exponent !== 0) {
    result = multiply(result, n);
    exponent -= 1;
  }
  return result.split('').reduce((s, n) => s + +n, 0);
};

module.exports = powerDigitSum;
