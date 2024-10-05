// src/registrationService.js
class RegistrationService {
    constructor(userService, emailService) {
      this.userService = userService;
      this.emailService = emailService;
    }
  
    async registerUser(user) {
      const addedUser = this.userService.addUser(user);
      await this.emailService.sendWelcomeEmail(user.email);
      return addedUser;
    }
  }
  
  module.exports = RegistrationService;
  