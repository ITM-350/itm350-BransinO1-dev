// __tests__/stress.test.js
const request = require('supertest');
const app = require('../src/server');

describe('Stress Test Pattern', () => {
  test('should handle 100 concurrent requests', async () => {
    const concurrentRequests = [];
    for (let i = 0; i < 100; i++) {
      concurrentRequests.push(request(app).get('/heavy'));
    }
    const responses = await Promise.all(concurrentRequests);
    
    responses.forEach(response => {
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('sum');
    });
  }, 30000); // Extending timeout for stress test
});
