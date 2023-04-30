var numbers = [3, 56, 2, 48, 5];    // numbers array is the only array used for reference for all below examples:


//Map - Create a new array by doing something with each item in an array.
function double(x) {
  return x * 2;
}
const newNumber = numbers.map(double);
console.log("All elements after a loop", newNumber);



//Filter - Create a new array by keeping the items that return true.
const newNumbers = numbers.filter(function (num) {
  if (num < 8) {
    console.log("Filtered numbers:", num);
  }
});



//Reduce - Accumulate a value by doing something to each item in an array.
var newNumber2 = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
console.log("Sum of all numbers", newNumber2);



//Find - find the first item that matches from an array.
const newNumber3 = numbers.find(function (num) {
  return num > 30;
});
console.log("1st element found in loop:", newNumber3);



//FindIndex - find the index of the first item that matches.
const newNumber4 = numbers.findIndex(function (num) {
  return num > 30;
});
console.log("Index of the 1st element found is:", newNumber4);



// CHALLENGE :

// concatenate the strings in a single variable and cut down it to first 100 characters
import emojipedia from "./emojipedia";

const newEmojipidea = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(newEmojipidea);
