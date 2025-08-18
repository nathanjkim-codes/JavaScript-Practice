# Prime Number Checker

A simple JavaScript function to check if a number is prime.

```javascript
// Function to check if a number is prime
function isPrime(num) {
  if (num < 2) return false; // less than 2 is not prime

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // divisible → not prime
  }

  return true; // no divisors → prime
}

// Examples
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
console.log(isPrime(2)); // true
console.log(isPrime(1)); // false
console.log(isPrime(49)); // false

/* What I Learned:
 - % operator checks the remainder
 - Only need to check up to sqrt(num) for efficiency
 - Early return in a function makes code simpler and faster
*/
```
