// Get DOM elements
const nameInput = document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const nameList = document.getElementById("nameList");

// Function to add item
function addItem() {
  const name = nameInput.value.trim(); // remove whitespace

  if (name === "") return; // return if input is empty

  // Create a new list item element
  const li = document.createElement("li");
  li.textContent = name;

  nameList.appendChild(li);
  nameInput.value = "";
}
