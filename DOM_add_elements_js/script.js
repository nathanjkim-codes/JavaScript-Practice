// select the container
const container = document.querySelector("#container");

//create a red <p> and add it
const redP = document.createElement("P");
redP.textContent = "Hey I'm red!";
redP.style.color = "red";
container.appendChild(redP);
