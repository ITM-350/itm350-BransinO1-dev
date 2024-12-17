module.exports = {
  coverageThreshold: {
    global: {
      lines: 25,        // Minimum 25% coverage for lines
      statements: 25,   // Minimum 25% coverage for statements
      branches: 25,     // Minimum 25% coverage for branches
      functions: 25     // Minimum 25% coverage for functions
    }
  },
  collectCoverage: true, // Enables coverage collection
  collectCoverageFrom: [
    'src/**/*.js',       // Collect coverage from all .js files inside src
    '!src/index.js',     // Exclude index.js from coverage
    '!src/server.js'     // Exclude server.js from coverage
  ]
};
