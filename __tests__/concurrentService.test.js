// __tests__/concurrentService.test.js
const { increment, getCounter } = require('../src/concurrentService');

describe('Multithreading Pattern', () => {
  beforeEach(() => {
    // Reset counter before each test
    counter = 0;
  });

  test('should handle multiple concurrent increments', async () => {
    const increments = Promise.all([increment(), increment(), increment()]);
    const results = await increments;

    expect(results).toEqual([1, 2, 3]);
    expect(getCounter()).toBe(3);
  });
});
