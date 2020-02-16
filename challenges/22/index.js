/**
 * Project Euler: Problem 22: Names scores
 * Using names, an array containing over five-thousand first names,
 * begin by sorting it into alphabetical order. Then working out the
 * alphabetical value for each name, multiply this value by its alphabetical
 * position in the list to obtain a name score.
 *
 * For example, when the list is sorted into alphabetical order, COLIN,
 * which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list.
 * So, COLIN would obtain a score of 938 × 53 = 49714.
 *
 * What is the total of all the name scores in the file? */

const alphabeticalValue = word => {
  let sum = 0;
  for (const char of word) {
    // 'A' starts as 65.
    sum += char.charCodeAt(0) - 64;
  }
  return sum;
};

const namesScores = names => {
  names = names.slice().sort();
  const sum = names.reduce((s, name, index) => {
    const value = alphabeticalValue(name);
    return s + value * (index + 1); // since index is zero based.
  }, 0);
  return sum;
};

module.exports = namesScores;
