// original array
let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

// function: array → keyed object
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

// function call
let usersById = groupById(users);

// result check
console.log(usersById);

/*
    Result:
    {
      john: { id: 'john', name: "John Smith", age: 20 },
      ann: { id: 'ann', name: "Ann Smith", age: 24 },
      pete: { id: 'pete', name: "Pete Peterson", age: 31 }
    }
    */
