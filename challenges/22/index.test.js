const namesScores = require('./index');

describe('Problem 22: Names scores', () => {
  test('test1', () => {
    expect(namesScores(['THIS', 'IS', 'ONLY', 'A', 'TEST'])).toEqual(791);
  });

  test('test2', () => {
    expect(
      namesScores(['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'])
    ).toEqual(1468);
  });
});
