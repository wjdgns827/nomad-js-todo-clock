const body = document.querySelector("body");

const imgNumber = 5;

function paintImage(number) {
  const img = new Image();
  img.src = `images/${number + 1}.jpg`;
  img.classList.add("bg_image");
  body.appendChild(img);
}

function genRandom() {
  const number = Math.floor(Math.random() * imgNumber);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
init();
