const MOVES = ['Rock', 'Paper', 'Scissors'];
var playerHp = 5;
var computerHp = 5;

function resetScore () {
    playerHp = 5;
    computerHp = 5;
}

function getComputerChoice () {
    let random_number = Math.floor(Math.random()*3)
    return MOVES[random_number];
}

function findWinner (playerSelection, computerSelection) {
    let winner;
    if (playerSelection === computerSelection) {
        winner = 'Tie';
    } else if (playerSelection === 'Rock') {
        winner = (computerSelection === 'Scissors') ? 'player':'computer';
    } else if (playerSelection === 'Paper') {
        winner = (computerSelection === 'Rock') ? 'player':'computer';
    } else {
        winner = (computerSelection === 'Paper') ? 'player':'computer';
    }
    return winner;
}

function playRound() {
    const computerSelection = getComputerChoice();
    const playerSelection = this.getAttribute('data-choice');
    let winner = findWinner(playerSelection, computerSelection);

    updateScore(winner);
    updateUI(winner, playerHp, playerSelection, computerHp, computerSelection);

    if (playerHp === 0 || computerHp === 0) {
        endGame(winner);
    }
}

function updateScore (winner) {
    if (winner === 'player') {
        computerHp -= 1;
    } else if (winner === 'computer') {
        playerHp -= 1;
    } else return;
}

function endGame() {
    let mainDiv = document.querySelector('.main-container');
    let gameContainer = document.querySelector('.game-container');
    const gameOverScreen = document.querySelector('.game-over-screen');

    mainDiv.removeChild(gameContainer);
    gameOverScreen.style.display = 'block';
}

function startGame() {
    let startScreen = document.querySelector('.start-screen');
    let gameOverScreen = document.querySelector('.game-over-screen');

    startScreen.style.display = 'none';   
    gameOverScreen.style.display = 'none';

    resetScore();
    createUI();

    let rock = document.querySelector('.rock');
    let paper = document.querySelector('.paper');
    let scissors = document.querySelector('.scissors');

    rock.addEventListener('click', playRound);
    paper.addEventListener('click', playRound);
    scissors.addEventListener('click', playRound);
}