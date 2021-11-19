let myButton = document.getElementById("color-generator");

myButton.addEventListener("click", function () {
  let bodyTag = document.getElementById("body-tag");
  bodyTag.style.backgroundColor = generateRandomColor();
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomColor() {
  let red, green, blue, style;
  red = getRandomInt(0, 255);
  green = getRandomInt(0, 255);
  blue = getRandomInt(0, 255);

  style = "rgb(" + red + " " + green + " " + blue + ")";
  return style;
}
