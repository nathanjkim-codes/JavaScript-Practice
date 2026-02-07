# Problem: Sort Users by Age (Without Mutating Original Array)

## Description

You have an array of user objects.  
Each object has a `name` and an `age`.

Write code to sort users by age **in ascending order**.

Also learn how to:

- Sort the array normally
- Sort the array **without changing the original array**

---

## Key / Learned Points

- sort() changes the original array

- slice() creates a shallow copy of the array

- Combining slice() + sort() allows safe sorting

- This pattern is commonly used to protect original data

## Example Data

```js
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [pete, john, mary];

// Solution 2: Sort Without Changing Original Array (Using slice)

function sortByAgeSafe(arr) {
  return arr
    .slice() // copy the array
    .sort((a, b) => a.age - b.age);
}

let sortedUsers = sortByAgeSafe(users);

console.log(sortedUsers.map((user) => user.name));
// ["John", "Mary", "Pete"]

console.log(users.map((user) => user.name));
// ["Pete", "John", "Mary"] (original is preserved)
```
