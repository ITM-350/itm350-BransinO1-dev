// src/concurrentService.js
let counter = 0;

function increment() {
  return new Promise(resolve => {
    setTimeout(() => {
      counter += 1;
      resolve(counter);
    }, 10);
  });
}

function getCounter() {
  return counter;
}

module.exports = { increment, getCounter };
