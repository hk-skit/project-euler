/**
 * Project Euler: Problem 17: Number letter countsPassed
 * If the numbers 1 to 5 are written out in words:
 * one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19
 * letters used in total.
 * If all the numbers from 1 to given limit inclusive were written out
 * in words, how many letters would be used?
 * NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two)
 * contains 23 letters and 115 (one hundred and fifteen) contains 20 letters.
 * The use of "and" when writing out numbers is in compliance with British usage.
 */

const toBritishWords = number => {
  if (number === 0) {
    return 'zero';
  }

  const units = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];

  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ];

  const scales = [
    '',
    'thousand',
    'million',
    'billion',
    'trillion',
    'quadrillion',
    'quintillion'
  ];

  const toWords = n => {
    if (n <= 19) {
      return units[n];
    }
    if (n >= 20 && n <= 99) {
      let word = `${tens[Math.floor(n / 10)]}`;
      word += n % 10 === 0 ? '' : '-' + units[n % 10];
      return word;
    }

    let word = `${toWords(Math.floor(n / 100))} hundred`;
    word += n % 100 !== 0 ? ' and ' + toWords(n % 100) : '';
    return word;
  };

  const groups = [];
  const digits = `${number}`.split('');
  while (digits.length) {
    groups.unshift(digits.splice(-3).join(''));
  }

  let word = '';

  for (let i = 0; i < groups.length; i += 1) {
    const n = +groups[i];
    if (n !== 0) {
      word = toWords(n) + ' ' + scales[groups.length - i - 1] + ' ' + word;
    }
  }
  return word.trim();
};

const numberLetterCounts = limit => {
  let count = 0;
  for (let i = 1; i <= limit; i += 1) {
    // Count letter except space and hyphen.
    count += toBritishWords(i).replace(/\s|-/g, '').length;
  }
  return count;
};

module.exports = numberLetterCounts;
