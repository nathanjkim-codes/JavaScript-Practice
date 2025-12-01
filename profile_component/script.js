// Select the card container
const memberCard = document.querySelector(".member-card");

// Select buttons
const editBtn = document.querySelector(".edit-btn");
const deleteBtn = document.querySelector(".delete-btn");

// Select text elements
const nameEl = document.querySelector(".member-name");
const roleEl = document.querySelector(".member-role");
const dobEl = document.querySelector(".member-dob");

// Edit button event
editBtn.addEventListener("click", () => {
  // Prompt for new name and update
  const newName = prompt("Enter new name", nameEl.textContent);
  if (newName) nameEl.textContent = newName;

  // Prompt for new role and update
  const newRole = prompt("Enter new role (parent/child)", roleEl.textContent);
  if (newRole) roleEl.textContent = newRole;

  // Prompt for new DOB and update
  const newDob = prompt("Enter new DOB (YYYY-MM-DD)", dobEl.textContent);
  if (newDob) dobEl.textContent = newDob;
});
