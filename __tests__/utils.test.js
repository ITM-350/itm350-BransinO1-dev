// __tests__/utils.test.js
const { isValidEmail } = require('../src/utils');

describe('Data-Driven Pattern', () => {
  const testCases = [
    { input: 'test@example.com', expected: true },
    { input: 'invalid-email', expected: false },
    { input: 'user@domain', expected: false },
    { input: 'user@domain.com', expected: true },
    { input: '', expected: false },
  ];

  test.each(testCases)(
    'should return $expected for input "$input"',
    ({ input, expected }) => {
      expect(isValidEmail(input)).toBe(expected);
    }
  );
});
