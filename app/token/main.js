let token = 0;
let myButtonElement = document.getElementById("counter");
let displayElement = document.getElementById("display");
myButtonElement.addEventListener("click", function () {
  token = token + 1;
  displayElement.innerHTML = 1;
});
