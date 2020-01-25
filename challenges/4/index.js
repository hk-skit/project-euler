/**
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two n-digit numbers.
 */

const isPalindrome = number => {
  let reverse = 0;
  let temp = number;
  while (temp !== 0) {
    reverse = reverse * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  return reverse === number;

  //   using apis.
  //   str = str.toString();
  //   return (
  //     str ===
  //     str
  //       .split('')
  //       .reverse()
  //       .join('')
  //   );
};

const largestPalindrome = digits => {
  // Edge case.
  if (digits === 1) {
    return 9;
  }
  let maxPalindrome = 0;
  const lower = 10 ** (digits - 1);
  const upper = 10 ** digits - 1;

  for (let i = upper; i >= lower; i -= 1) {
    for (let j = i; j >= lower; j -= 1) {
      const product = i * j;
      if (product <= maxPalindrome) {
        break;
      }
      if (isPalindrome(product)) {
        maxPalindrome = product;
      }
    }
  }
  return maxPalindrome;
};

module.exports = largestPalindrome;
