// Select the button
const button = document.querySelector("#colorBtn");

// Listen for click
button.addEventListener("click", function () {
  // Change background color randomly
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
