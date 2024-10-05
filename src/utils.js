// src/utils.js
function isValidEmail(email) {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
  }
  
  module.exports = { isValidEmail };
  