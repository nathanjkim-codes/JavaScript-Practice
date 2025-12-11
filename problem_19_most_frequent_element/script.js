function getAverage(arr) {
  if (arr.length === 0) return 0;

  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  return sum / arr.length;
}
console.log(getAverage([1, 2, 3, 4, 5])); // 3
console.log(getAverage([])); // 0
console.log(getAverage([10, -10, 20])); // 6.666666666666667
