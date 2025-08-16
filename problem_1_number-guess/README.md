# Problem 1: Find Maximum Number

This is a small program to find the biggest number in an array.

## Code

function findMax(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
if (arr[i] > max) {
max = arr[i];
}
}
return max;
}

console.log(findMax([5, 1, 9, 3, 7])); // 9

## What I Learned

- How to look at all numbers in an array.
- How to compare numbers to find the biggest one.
- How arr[i] works to get numbers from the array.
- How to change a number when we find a bigger one.
