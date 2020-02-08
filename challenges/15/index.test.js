const latticePaths = require('./index');

describe('Problem 15: Lattice paths', () => {
  [
    { gridSize: 4, paths: 70 },
    { gridSize: 9, paths: 48620 },
    { gridSize: 20, paths: 137846528820 }
  ].forEach(({ gridSize, paths }) => {
    test(`gridSize = ${gridSize}, paths = ${paths}`, () => {
      expect(latticePaths(gridSize)).toEqual(paths);
    });
  });
});
