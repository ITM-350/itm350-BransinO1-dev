// src/server.js or backend/server.js

const express = require('express');
const app = express();

// Existing routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Add the /heavy route
app.get('/heavy', (req, res) => {
  // Simulate heavy processing
  let sum = 0;
  for (let i = 0; i < 1e6; i++) {
    sum += i;
  }
  res.send({ sum });
});

module.exports = app;
