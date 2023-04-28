// DICE - 1

//This generates random number from 1 to 6:
var randomNumber1 = Math.floor(Math.random()*6)+1;

//Selects images from images/dice1.png to images/dice6.png:
var randomDiceImage = "images/dice" + randomNumber1 + ".png";

//To call random image from the file:
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage );





//DICE - 2

//This generates random number from 1 to 6:
var randomNumber2 = Math.floor(Math.random()*6)+1

//Selects images from images/dice1.png to images/dice6.png:
var FirstDice2 = 'images/dice' + randomNumber2 + '.png';

//To call random image from the file:
document.querySelectorAll('img')[1].setAttribute("src", FirstDice2 )




if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "PLAYER-1 WINS";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML ="PLAYER-2 WINS";
}
else{
    document.querySelector("h1").innerHTML = "DRAW";
}


//REFRESH BUTTON

document.querySelector(".refresh").addEventListener("click", function hellu(){
    location.reload();
});




