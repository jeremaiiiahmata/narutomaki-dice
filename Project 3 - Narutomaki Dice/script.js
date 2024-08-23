function generateDice(){

    var randomNumber = (Math.random() * 6) + 1;

    return Math.floor(randomNumber);

}

function decideWinner(playerOne, playerTwo){

    var winner = "";

    if (playerOne > playerTwo){

        winner = "🍥 Player One Wins!";

    } else if (playerOne < playerTwo) { 

        winner = "Player Two Wins! 🍥";

    } else if (playerOne === playerTwo) {

        winner = "🍥 It's a Tie! 🍥"

    }

    return winner;

}

function changeDiceImage(playerOne, playerTwo){


    var playerOneLink = "./images/" + playerOne + ".png";
    var playerTwoLink = "./images/" + playerTwo + ".png"

    if(playerOne === 1){
        document.querySelector(".player-one img").setAttribute("src", playerOneLink);
    } else if(playerOne === 2){
        document.querySelector(".player-one img").setAttribute("src", playerOneLink);
    } else if(playerOne === 3){
        document.querySelector(".player-one img").setAttribute("src", playerOneLink);
    } else if(playerOne === 4){
        document.querySelector(".player-one img").setAttribute("src", playerOneLink);
    } else if(playerOne === 5){
        document.querySelector(".player-one img").setAttribute("src", playerOneLink);
    } else if(playerOne === 6){
        document.querySelector(".player-one img").setAttribute("src", playerOneLink);
    } 

    if(playerTwo === 1){
        document.querySelector(".player-two img").setAttribute("src", playerTwoLink);
    } else if(playerTwo === 2){
        document.querySelector(".player-two img").setAttribute("src", playerTwoLink);
    } else if(playerTwo === 3){
        document.querySelector(".player-two img").setAttribute("src", playerTwoLink);
    } else if(playerTwo === 4){
        document.querySelector(".player-two img").setAttribute("src", playerTwoLink);
    } else if(playerTwo === 5){
        document.querySelector(".player-two img").setAttribute("src", playerTwoLink);
    } else if(playerTwo === 6){
        document.querySelector(".player-two img").setAttribute("src", playerTwoLink);
    } 

}


var playerOneDice = 0;
var playerTwoDice = 0;
var winner = "";

playerOneDice = generateDice();
playerTwoDice = generateDice();

changeDiceImage(playerOneDice, playerTwoDice);

winner = decideWinner(playerOneDice, playerTwoDice);

document.querySelector("h1").textContent = winner;


