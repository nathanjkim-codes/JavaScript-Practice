const addBtn = document.getElementById("addBtn");
const nameInput = document.getElementById("nameInput");
const cardContainer = document.getElementById("cardContainer");

addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter a name");
    return; // stop the function if input is empty
  }

  // Create the card div
  const card = document.createElement("div");
  card.classList.add("member-card");

  // Create the name element
  const nameEl = document.createElement("h3");
  nameEl.classList.add("member-name");
  nameEl.textContent = name;

// Create the Delete button
const deleteBtn = document.createElement("button");
deleteBtn.classList.add("delete-btn");
deleteBtn.textContent = "Delete";

// Create the Edit button
const editBtn = document.createElement("button");
editBtn.classList.add("edit-btn");
editBtn.textcontent = "Edit";

// Append elements to the card
card.appendChild(nameEl);
card.appendChild(deleteBtn);
card.appendChild(editBtn);

// Append the card to the card container
cardContainer.appendChild(card);


