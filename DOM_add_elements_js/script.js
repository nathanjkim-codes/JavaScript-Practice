// Select the container
const container = document.querySelector("#container");

// Create a red <p> and add it
const redP = document.createElement("P");
redP.textContent = "Hey I'm red!";
redP.style.color = "red";
container.appendChild(redP);

// Create a blue <h3> and add it
const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm blue h3!";
blueH3.style.color = "blue";
container.appendChild(blueH3);
