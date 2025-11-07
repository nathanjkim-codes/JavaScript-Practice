// Select elements
const button = document.querySelector("#colorBtn");
const text = document.querySelector("#text");

// Boolean to track toggle state
let isBlue = true;

// Listen for click event
button.addEventListener("click", function () {
  if (isBlue) {
    text.style.color = "red";
    text.textContent = "Now I'm Red!";
  } else {
    text.style.color = "blue";
    text.textContent = "Now I'm Blue!";
  }
  isBlue = !isBlue; // Toggle state
});
