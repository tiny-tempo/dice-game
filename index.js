var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);




if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " 🎉🎉player 1 wins";
  document.querySelector(".player1").innerHTML = "player 1 🏆👑🕺"
  document.querySelector(".player2").innerHTML = "player 2 😥😓"

}

else if ( randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "player 2 wins 🎉🎉";
  document.querySelector(".player2").innerHTML = "player 2 🏆👑🕺"
  document.querySelector(".player1").innerHTML = "player 1 😥😓"
}
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "it's a draw :("
}
