function filterTransformNumbers(arr) {
  // Filter even numbers
  const evenNumbers = arr.filter((num) => num % 2 === 0);
  // Square each number
  const squaredNumbers = evenNumbers.map((num) => num ** 2);
  return squaredNumbers;
}

// Test
console.log(filterTransformNumbers([1, 2, 3, 4, 5, 6])); // [4,16,36]
