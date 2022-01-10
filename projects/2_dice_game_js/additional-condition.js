/*
GAME RULES:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. 
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. 
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. 
*/

var scores, roundScore, activePlayer, gamePlaying, lastDice;

init();
// document.querySelector('#score-' + activePlayer).textContent = dice;

// document.querySelector(".dice").style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
    if (gamePlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        document.getElementById('dice-1').style.display = 'block'
        document.getElementById('dice-2').style.display = 'block'


        document.getElementById('dice-1').src = "dice-" + dice1 + ".png";
        document.getElementById('dice-2').src = "dice-" + dice2 + ".png";

        if (dice1 !== 1 && dice2 !== 1) {
            roundScore += dice1 + dice2;
            document.getElementById(
                "current-" + activePlayer
            ).textContent = roundScore;
        } else {
            nextPlayer();
        }

        /*
        if (dice === 6 && lastDice === 6) {
            scores[activePlayer] = 0;
            document.querySelector("#score-" + activePlayer).textContent = '0';
            nextPlayer()
        } else if (dice !== 1) {
            roundScore += dice;
            document.getElementById(
                "current-" + activePlayer
            ).textContent = roundScore;
        } else {
            nextPlayer();
        }
        lastDice = dice;
        */
    }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector("#score-" + activePlayer).textContent =
            scores[activePlayer];

        let input = document.querySelector(".input-score").value;
        let winningScore;

        if (input) {
            winningScore = input
        } else
            winningScore = 100;

        if (scores[activePlayer] >= winningScore) {
            document.getElementById("name-" + activePlayer).textContent = "Winner";
            document.getElementById("dice-1").style.display = "none";
            document.getElementById("dice-2").style.display = "none";
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.add("winner");
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.remove("active");
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    // player change
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 0";
    document.getElementById("name-1").textContent = "Player 1";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");
}