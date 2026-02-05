# Problem 24: Map to Names

## Description

You have an array of user objects, each one has `user.name`.  
Write the code that converts it into an array of names.

---

## Key / Learned Points

# Objects are like boxes: each object stores related data (like name and age).

# Array is like a shelf: you can store many objects together and access them by index.

# Map is a tool to transform arrays: it goes through each object and returns a new array with the values you want.

# Using map, we can efficiently extract specific properties (like name) from an array of objects.

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
