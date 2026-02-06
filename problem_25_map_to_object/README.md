# Problem 25: Map to Objects

## Description

You have an array of user objects.  
Each object contains `name`, `surname`, and `id`.

Write the code that creates a new array of objects with:

- `id`
- `fullName` (combined from `name` and `surname`)

---

## Key / Learned Points

- Objects group related data together (name, surname, id).
- Arrays store multiple objects so they can be handled at once.
- The `map` method creates a new array by transforming each item.
- `map` does not change the original array.
- This pattern is very common in real JavaScript projects.

---

## Example

```js
// Map to Objects Example

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

// Use map to create new array with fullName and id
let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log(usersMapped);
/*
[
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // John Smith
```
