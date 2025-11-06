// Select elements
const button = document.querySelector("#colorBtn");
const text = document.querySelector("#text");

// Listen for click event
button.addEventListener("click", function () {
  text.style.color = "blue";
});
