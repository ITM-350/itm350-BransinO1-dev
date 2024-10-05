// __tests__/dataProcessor.test.js
const { processData } = require('../src/dataProcessor');

describe('Performance Pattern', () => {
  test('processData should complete within 100ms for large dataset', () => {
    const largeData = Array(100000).fill(0);
    const start = Date.now();
    processData(largeData);
    const end = Date.now();
    const duration = end - start;
    expect(duration).toBeLessThan(100);
  });
});
