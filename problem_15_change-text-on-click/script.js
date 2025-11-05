const button = document.querySelector("#changeBtn");
const message = document.querySelector("#message");

button.addEventListener("click", function () {
  message.innerText = "Button clicked!";
});
