# Problem: Create Keyed Object from Array

## Description

You have an array of user objects.  
Each object has an `id`, `name`, and `age`.

Write a function `groupById(array)` that creates a new **object** from the array, where:

- Each `id` becomes a **key** in the object
- The corresponding value is the original user object

This is useful when you want **fast access to objects by id** instead of looping through the array.

---

## Key / Learned Points

- Arrays store items in order; objects store key-value pairs
- `reduce()` can be used to transform an array into a single object
- The accumulator (`obj`) collects results step by step
- `obj[value.id] = value` sets each user object under its `id` key
- This pattern is commonly used to organize API data or lookup tables

---

## Example Data

```js
// Original array
let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

// Function: array → keyed object
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value; // add each user to object with id as key
    return obj;
  }, {});
}

// Function call
let usersById = groupById(users);

// Result check
console.log(usersById);
/*
{
  john: { id: 'john', name: "John Smith", age: 20 },
  ann: { id: 'ann', name: "Ann Smith", age: 24 },
  pete: { id: 'pete', name: "Pete Peterson", age: 31 }
}
*/
```
