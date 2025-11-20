# DOM Filter & Search

A simple project to manage a member list with real-time search.

---

## Features

- Display members as cards
- Filter/search members while typing (case-insensitive)

---

## Code

```javascript
const members = [];
const cardContainer = document.getElementById("cardContainer");
const searchInput = document.getElementById("searchInput");

function renderCards(list) {
  cardContainer.innerHTML = "";
  list.forEach((name) => {
    const card = document.createElement("div");
    card.classList.add("member-card");
    card.textContent = name;
    cardContainer.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = members.filter((name) =>
    name.toLowerCase().includes(keyword)
  );
  renderCards(filtered);
});

---

## Fix
- Fixed issue where search was not updating because filtering and
  rendering were outside the event listener.

---

## What I learned
- Selecting DOM elements
- Rendering elements dynamically
- Using "input" event for live search
- Filtering arrays with 'filter()' and 'includes()'
- Clearing previous content with innerHTML
- Importance of scoping inside event listeners

```
