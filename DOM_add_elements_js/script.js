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

// Create a <div> with black border and pink background
const pinkDiv = document.createElement("div");
pinkDiv.style.border = "2px solid black";
pinkDiv.style.backgroundColor = "pink";
pinkDiv.style.padding = "10px";

// Create an <h1> inside the <div>
const divH1 = document.createElement("h1");
divH1.textContent = "I'm in a div";

// Create a <p> inside the <div>
const divP = document.createElement("P");
divP.textContent = "ME TOO!";

// Append <h1> and <p> to the <div>
pinkDiv.appendChild(divH1);
pinkDiv.appendChild(divP);

// Append the <div> to the container
container.appendChild(pinkDiv);
