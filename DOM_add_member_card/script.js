const addBtn = document.getElementById("addBtn");
const nameInput = document.getElementById("nameInput");
const cardContainer = document.getElementById("cardContainer");

addBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();

    if(name === "") {
        alert("Please enter a name!");
        return;
    }
