// __tests__/userService.test.js
const UserService = require('../src/userService');

describe('Collection Management Pattern', () => {
  let userService;

  beforeEach(() => {
    userService = new UserService();
  });

  test('should add a user to the collection', () => {
    const user = { username: 'john_doe', email: 'john@example.com' };
    userService.addUser(user);
    expect(userService.getAllUsers()).toContainEqual(user);
  });

  test('should remove a user from the collection', () => {
    const user = { username: 'jane_doe', email: 'jane@example.com' };
    userService.addUser(user);
    const removed = userService.removeUser('jane_doe');
    expect(removed).toBe(true);
    expect(userService.getAllUsers()).not.toContainEqual(user);
  });

  test('should not remove a non-existent user', () => {
    const removed = userService.removeUser('non_existent');
    expect(removed).toBe(false);
  });
});
