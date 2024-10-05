// index.js

const express = require('express'); // Import the express library
const bodyParser = require('body-parser'); // Import body-parser middleware
const cors = require('cors'); // Import cors middleware
const app = express(); // Create an instance of express
const PORT = process.env.PORT || 3000; // Set the port

// Middleware setup
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON requests

// Import routes or services
const userService = require('./userService');
const registrationService = require('./registrationService');
// ... Import other services or routes as needed

// Example route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Additional routes using imported services
app.use('/api/users', userService); // Example route for user-related actions
app.use('/api/register', registrationService); // Example route for registration

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app; // Export the app for testing purposes
