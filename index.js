//0-6

var ramdomNo1 = Math.floor(Math.random() * 6) + 1;
var ramdomNo2 = Math.floor(Math.random() * 6) + 1;
//dice1.png-dice6.png
var randomDiceImage1 = "dice" + ramdomNo1 + ".png";
var randomDiceSource1 = "images/" + randomDiceImage1;

var randomDiceImage2 = "dice" + ramdomNo2 + ".png";
var randomDiceSource2 = "images/" + randomDiceImage2;



var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomDiceSource1);

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomDiceSource2);


if (ramdomNo1 < ramdomNo2) {
    document.querySelector("h1").innerHTML = "&#128681 Player2 won!";
} else if (ramdomNo1 > ramdomNo2) {
    document.querySelector("h1").innerHTML = "&#128681 Player1 won!";

} else {
    document.querySelector("h1").innerHTML = "Equal 🏳️!";
}