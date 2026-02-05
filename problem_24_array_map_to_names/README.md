# Problem 24: Map to Names

## Description

You have an array of user objects, each one has `user.name`.  
Write the code that converts it into an array of names.

---

## Example

```js
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

// Use arrow function and map
let names = users.map((user) => user.name);

console.log(names); // ["John", "Pete", "Mary"]
```
