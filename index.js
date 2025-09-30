// index.js

// Assignment 1: writeCards()
function writeCards(names, event) {
  let messages = [];

  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return messages;
}

// Assignment 2: countDown()
function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}

// Export functions for testing
module.exports = {
  writeCards,
  countDown,
};
