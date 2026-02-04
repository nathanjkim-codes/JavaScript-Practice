/**
 * calculateDiscount
 * Takes the original price and a discount percentage,
 * and returns the final price after the discount.
 */
function calculateDiscount(price, discountPercent) {
  // Calculate discount amount
  const discountAmount = price * (discountPercent / 100);

  // Subtract discount from original price
  const finalPrice = price - discountAmount;

  // Return the final price
  return finalPrice;
}

// Test
console.log(calculateDiscount(100, 20)); // 80
console.log(calculateDiscount(250, 15)); // 212.5
console.log(calculateDiscount(50, 0)); // 50
console.log(calculateDiscount(120, 50)); // 60
