/**
 * Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
 * there are exactly 6 routes to the bottom right corner.
 * https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-15-lattice-paths
 *
 * How many such routes are there through a given gridSize?
 */

//  Using dynamic programming.
const latticePaths = size => {
  const grid = Array.from({ length: size + 1 }, (_, index) => {
    return Array(size)
      .fill(index === size ? 1 : 0)
      .concat(1);
  });
  for (let i = grid.length - 2; i >= 0; i -= 1) {
    for (let j = grid.length - 2; j >= 0; j -= 1) {
      grid[i][j] = grid[i + 1][j] + grid[i][j + 1];
    }
  }
  return grid[0][0];
};

module.exports = latticePaths;
