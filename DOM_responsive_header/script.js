// 1. Select the hamburger button
const menuToggle = document.querySelector(".menu-toggle");

// 2. Select the navigation list
const navList = document.querySelector(".nav-list");

// 3. When the button is clicked, do something
menuToggle.addEventListener("click", () => {
  // Toggle the "active" class on the nav list
  // If the class is there -> remove it
  // If it's not there -> add it
  navList.classList.toggle("active");
});
