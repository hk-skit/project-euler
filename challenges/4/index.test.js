const largestPalindrome = require('./index');

describe('Challenge 3: Largest Palindrome', () => {
  [
    {
      digits: 2,
      palindrome: 9009
    },
    {
      digits: 3,
      palindrome: 906609
    },
    {
      digits: 4,
      palindrome: 99000099
    }
  ].forEach(({ digits, palindrome }) =>
    test(`digits = ${digits}, palindrome = ${palindrome}`, () => {
      expect(largestPalindrome(digits)).toBe(palindrome);
    })
  );
});
