/* eslint-env es6, node, jest */

const index = require('../index');

describe('index', () => {
  test('4 + 2', () => {
    const result = index(4, 2);
    expect(result).toBe(6);
  });
});