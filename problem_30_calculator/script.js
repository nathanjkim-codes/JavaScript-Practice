// ==================================
// ADD
// ==================================

const add = function (a, b) {
  return a + b;
};
console.log(add(3, 5)); // 8

// ==================================
// SUBTRACT
// ==================================

const subtract = function (a, b) {
  return a - b;
};
console.log(subtract(7, 3)); // 4

// ==================================
// SUM
// ==================================

const sum = function (numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
};
console.log(sum([1, 2, 3, 4]));

//===================================
// MULTIPLY
//===================================

const multiply = function (array) {
  return array.reduce((acc, cur) => acc * cur, 1);
};
console.log(multiply([1, 2, 3, 4]));

//====================================
// POWER
//====================================
const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
