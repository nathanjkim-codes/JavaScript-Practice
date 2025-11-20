const members = [];

const cardContainer = document.getElementById("cardContainer");
const nameInput = document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");

// Function to render member cards
function renderCards(list) {
  cardContainer.innerHTML = ""; // clear existing cards

  list.forEach((name) => {
    const card = document.createElement("div");
    card.classList.add("member-card");
    card.textContent = name;
    cardContainer.appendChild(card);
  });
}

// Typing in the search input
// Using "input" event so that the function runs every time the user types
searchInput.addEventListener("input", () => {
  // Get the search keyword (Lowercase for case-insensitive search)
  const keyword = searchInput.value.toLowerCase();
});

// filter members that include the keyword
const filtered = members.filter((name) => name.toLowerCase().includes(keyword));
