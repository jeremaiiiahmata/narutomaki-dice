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


    var playerOneSource = "./images/" + playerOne + ".png";
    var playerTwoSource = "./images/" + playerTwo + ".png"

    document.querySelector(".player-one .dice-image").setAttribute("src", playerOneSource);
    document.querySelector(".player-two .dice-image").setAttribute("src", playerTwoSource);

}


function shuffleDice(){

var playerOneDice = 0;
var playerTwoDice = 0;
var winner = "";

playerOneDice = generateDice();
playerTwoDice = generateDice();

changeDiceImage(playerOneDice, playerTwoDice);

winner = decideWinner(playerOneDice, playerTwoDice);

document.querySelector("h1").textContent = winner;


}


