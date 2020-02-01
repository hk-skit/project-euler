/*
 * Project Euler: Problem 13: Large sum.
 * https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-13-large-sum
 */

const add = (a, b) => {
  if (a.length > b.length) {
    [a, b] = [b, a];
  }

  const d = b.length - a.length;
  let result = '';
  let carry = 0;
  let i = a.length - 1;
  while (i >= 0) {
    const sum = +a[i] + +b[i + d] + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
    i -= 1;
  }
  i = d - 1;
  while (i >= 0) {
    const sum = +b[i] + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
    i -= 1;
  }
  return carry ? carry + result : result;
};

function largeSum(arr) {
  return +arr
    .reduce((sum, number) => {
      if (sum === '') {
        return number;
      }
      return add(sum, number);
    }, '')
    .slice(0, 10);
}

module.exports = largeSum;
