// src/userService.js
class UserService {
    constructor() {
      this.users = [];
    }
  
    addUser(user) {
      this.users.push(user);
      return user;
    }
  
    removeUser(username) {
      const initialLength = this.users.length;
      this.users = this.users.filter(user => user.username !== username);
      return this.users.length < initialLength;
    }
  
    getAllUsers() {
      return this.users;
    }
  }
  
  module.exports = UserService;
  