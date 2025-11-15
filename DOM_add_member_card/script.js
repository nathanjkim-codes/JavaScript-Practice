const addBtn = document.getElementById("addBtn");
const nameInput = document.getElementById("nameInput");
const cardContainer = document.getElementById("cardContainer");

addBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();

    if(name === "") {
        alert("Please enter a name");
        return;
    }

    // Create the card div
    const card = document.createElement("div");
    card.classList.add("member-card");

    // Create the name element
    const nameEl = document.createElement("h3");
    nameEl.classList.add("member-name");
    nameEl.textcontent = name;