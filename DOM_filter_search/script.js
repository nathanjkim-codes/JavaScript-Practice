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
