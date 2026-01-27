const toggleBtn = document.getElementById("toggleBtn");
const statusText = document.getElementById("statusText");

let isOn = false; // state variable to track ON/OFF

toggleBtn.addEventListener("click", () => {
  isOn = !isOn; // toggle the state
});

// update the button text on current state
toggleBtn.textContent = isOn ? "ON" : "OFF";

// update status text
statusText.textContent = `Current status: ${isOn ? "ON" : "OFF"}`;
