module.exports = {
  coverageThreshold: {
    global: {
      lines: 80,       // Global requirement for all files
      statements: 80,  // Ensures statement coverage
      branches: 80,    // Ensures branch coverage
      functions: 80,   // Ensures function coverage
    },
    './src/**/*.js': { // Per-file requirement for the src directory
      lines: 25
    }
  }
};
