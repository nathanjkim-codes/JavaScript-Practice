/**
 * getFirstItem
 * Takes an array and returns the first item.
 * If the array is empty, returns "No items".
 */
function getFirstItem(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return "No items";
  }

  // Return the first element of the array
  return arr[0];
}

// Test
console.log(getFirstItem([10, 20, 30])); // 10
console.log(getFirstItem(["apple", "banana"])); // "apple"
console.log(getFirstItem([])); // "No items"
