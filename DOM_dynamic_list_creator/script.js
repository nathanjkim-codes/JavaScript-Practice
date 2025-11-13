// Select the container where everything will go
const container = document.querySelector("#container");

// Create the input and button
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter an item";

const addButton = document.createElement("button");
addButton.textContent = "Add Item";

// Create a <ul> to hold list items
const list = document.createElement("ul");

// Add all the elements to the container
container.appendChild(input);
container.appendChild(addButton);
container.appendChild(list);

// Add event listener for the button
addButton.addEventListener("click", () => {
  const text = input.value.trim(); // get and clean input text

  if (text === "") return; // do nothing if input is empty

  const newItem = document.createElement("li");
  newItem.textContent = text;
  list.appendChild(newItem);

  input.value = ""; // clear input after adding
});
