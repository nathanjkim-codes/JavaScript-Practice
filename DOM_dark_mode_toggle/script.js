// script.js

// Select DOM elements
const toggleBtn = document.querySelector("#toggleBtn");
const body = document.body;

// Listen for button click
toggleBtn.addEventListener("click", () => {
  // Toggle the dark-mode class on the body
  body.classList.toggle("dark-mode");

  // Update button text based on current mode
  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Switch to Light Mode";
  } else {
    toggleBtn.textContent = "Switch to Dark Mode";
  }
});
