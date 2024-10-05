// __tests__/server.test.js

const request = require('supertest'); // To simulate requests to the server
const app = require('../src/server'); // Import your server

describe('Server Test', () => {
  it('should start the server without errors', async () => {
    const res = await request(app).get('/'); // Assuming you have a root route
    expect(res.statusCode).toBe(200); // Expect the status code to be 200 (OK)
  });
});
