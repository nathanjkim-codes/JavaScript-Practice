function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && b >= item);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 2, 7);

alert(filtered);
alert(arr);
// Add filterRange function example
