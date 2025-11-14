// ===== Dynamic List Editor =====

// 1. Select important DOM elements
const input = document.querySelector("#itemInput");
const addButton = document.querySelector("#addBtn");
const list = document.querySelector("#list");

// 2. Add click event listener to the "Add" button
addButton.addEventListener("click", () => {
  // Get and clean the user's input
  const text = input.value.trim();

  // If the input is empty, do nothing
  if (text === "") return;
    
  // Create a new <li> element
  const newItem = document.createElement("li");
  newItem.textContent = text;

  // Add a "Remove" button to each list item
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Delete";
  removeBtn.style.marginLeft = "10px";

   // Remove button deletes its own list item
  removeBtn.addEventListener("click", () => {
    newItem.remove();
  });