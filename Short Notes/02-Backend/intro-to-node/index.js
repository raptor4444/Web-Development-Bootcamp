var randomWords = require('random-words');

console.log(randomWords());
console.log(randomWords({ exactly: 5, join: ' ' }))