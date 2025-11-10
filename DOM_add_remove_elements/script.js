const addBtn = document.querySelector("#addBtn");
const removeBtn = document.querySelector("#removeBtn");
const itemList = document.querySelector("#itemList");

let count = 1;

// add item
addBtn.addEventListener("click", () => {
  count++;
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${count}`;
  itemList.appendChild(newItem);
});

// remove last item
removeBtn.addEventListener("click", () => {
  const lastItem = itemList.lastElementChild;
  if (lastItem) {
    itemList.removeChild(lastItem);
    count--;
  }
});
