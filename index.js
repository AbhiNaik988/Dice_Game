//generate random number between 1-6
const randomNumber1 = Math.round(Math.random() * 5) + 1;
const randomNumber2 = Math.round(Math.random() * 5) + 1;

//getting img reference
let image1 = document.querySelector(".container .dice_container_left img");
let image2 = document.querySelector(".container .dice_container_right img");

//getting main heading reference
let header = document.querySelector("header h1");

if (randomNumber1 > randomNumber2) {
  header.innerHTML = " 🚩 Player 1 wins";
}
else if (randomNumber1 < randomNumber2) {
  header.innerHTML = "Player 2 wins! 🚩 ";
}
else if (randomNumber1 == randomNumber2) {
  header.innerHTML = "It's a draw!";
}

//set image 1 src
if (randomNumber1 === 1) {
  image1.setAttribute("src", "dice_1.png");
} else if (randomNumber1 === 2) {
  image1.setAttribute("src", "dice_2.png");
} else if (randomNumber1 === 3) {
  image1.setAttribute("src", "dice_3.png");
} else if (randomNumber1 === 4) {
  image1.setAttribute("src", "dice_4.png");
} else if (randomNumber1 === 5) {
  image1.setAttribute("src", "dice_5.png");
} else if (randomNumber1 === 6) {
  image1.setAttribute("src", "dice_6.png");
}

//set image 2 src
if (randomNumber2 === 1) {
  image2.setAttribute("src", "dice_1.png");
} else if (randomNumber2 === 2) {
  image2.setAttribute("src", "dice_2.png");
} else if (randomNumber2 === 3) {
  image2.setAttribute("src", "dice_3.png");
} else if (randomNumber2 === 4) {
  image2.setAttribute("src", "dice_4.png");
} else if (randomNumber2 === 5) {
  image2.setAttribute("src", "dice_5.png");
} else if (randomNumber2 === 6) {
  image2.setAttribute("src", "dice_6.png");
}
