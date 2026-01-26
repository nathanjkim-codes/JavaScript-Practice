const toggleBtn = document.getElementById("toggleBtn");
const statusText = document.getElementById("statusText");

let isOn = false; // state variable to track ON/OFF

toggleBtn.addEventListener("click", () => {
  isOn = !isOn; // toggle the state
});
