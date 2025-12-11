// Define getCartTotal function
// Calculates the total sum of product prices in an array
function getCartTotal(cart) {
  // If the array is empty, return 0
  if (cart.length === 0) return 0;

  // Use reduce to sum all elements in the array
  const total = cart.reduce((acc, cur) => acc + cur, 0);

  return total;
}

// Test examples
console.log(getCartTotal([100, 200, 50])); // 350
console.log(getCartTotal([])); // 0
console.log(getCartTotal([5, 10, 15])); // 30
console.log(getCartTotal([12.5, 7.5, 10])); // 30
