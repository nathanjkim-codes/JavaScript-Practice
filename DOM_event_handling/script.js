//=================================================
//event handler using the addEventListener() method
//=================================================
let btn = document.querySelector("#btn");

function handleClick() {
  alert("It was clicked");
}
btn.addEventListener("click", handleClick);

/*==================================================
 shorter way to register an event handler is to place 
 all code in an anonymous function 
===================================================*/
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  alert("It was clicked!");
});

//===================================================
//Using arrow function
//===================================================
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  alert("It was clicked!");
});
