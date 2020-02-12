// https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-18-maximum-path-sum-i
const maxPathSum = triangle => {
  const table = Array.from({ length: triangle.length }, (_, index) => {
    return index !== 0 ? Array(triangle.length).fill(0) : triangle[0].slice();
  });

  for (let i = 1; i < table.length; i += 1) {
    for (let j = 0; j < table.length; j += 1) {
      const n = triangle[i][j];
      let max = n + table[i - 1][j];
      max = j > 0 ? Math.max(max, n + table[i - 1][j - 1]) : max;
      table[i][j] = max;
    }
  }

  return Math.max(...table[table.length - 1]);
};

module.exports = maxPathSum;
