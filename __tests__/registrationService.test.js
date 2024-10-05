// __tests__/registrationService.test.js
const UserService = require('../src/userService');
const RegistrationService = require('../src/registrationService');

describe('Process Pattern', () => {
  let userService;
  let registrationService;
  let emailServiceMock;

  beforeEach(() => {
    userService = new UserService();
    emailServiceMock = {
      sendWelcomeEmail: jest.fn().mockResolvedValue(true),
    };
    registrationService = new RegistrationService(userService, emailServiceMock);
  });

  test('should register user and send welcome email', async () => {
    const user = { username: 'alice', email: 'alice@example.com' };
    const result = await registrationService.registerUser(user);

    expect(result).toEqual(user);
    expect(userService.getAllUsers()).toContainEqual(user);
    expect(emailServiceMock.sendWelcomeEmail).toHaveBeenCalledWith('alice@example.com');
  });
});
