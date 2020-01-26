const thousandDigits = require('./series');

/**
 * https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-8-largest-product-in-a-series
 *
 */
const largestProductInASeries = (digits, series = thousandDigits) => {
  let start = 0;
  let end = start + digits - 1;
  let maxProduct = 0;
  while (end < series.length) {
    let product = 1;
    for (let i = start; i <= end; i += 1) {
      product *= series[i];
    }
    maxProduct = product > maxProduct ? product : maxProduct;
    start += 1;
    end += 1;
  }
  return maxProduct;
};

const _largestProductInASeries = (digits, series = thousandDigits) => {};

module.exports = largestProductInASeries;
