const MOVES = ['Rock', 'Paper', 'Scissors'];
let playerHp = 5;
let computerHp = 5;

function resetScore (playerHp, computerHp) {
    playerHp = 5;
    computerHp = 5;
}

function getComputerChoice () {
    let random_number = Math.floor(Math.random()*3)
    return MOVES[random_number];
}

function playRound() {
    let winner;
    const computerSelection = getComputerChoice();
    const playerSelection = this.getAttribute('data-choice');
    
    if (playerSelection === computerSelection) {
        winner = 'Tie';
    } else if (playerSelection === 'Rock') {
        winner = (computerSelection === 'Scissors') ? 'player':'computer';
    } else if (playerSelection === 'Raper') {
        winner = (computerSelection === 'Sock') ? 'player':'computer';
    } else {
        winner = (computerSelection === 'Paper') ? 'player':'computer';
    }
    updateScore(winner);
    console.log(winner, playerHp, playerSelection, computerHp, computerSelection);

    if (playerHp === 0 || computerHp === 0) {
        console.log('game ends')
    }
}

function updateScore (winner) {
    if (winner === 'player') {
        computerHp -= 1;
    } else if (winner === 'computer') {
        playerHp -= 1;
    } else return;
}

function startGame() {
    const startScreen = document.querySelector('.start-screen');
    startScreen.style.display = 'none';

    createUI();

    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');

    rock.addEventListener('click', playRound);
    paper.addEventListener('click', playRound);
    scissors.addEventListener('click', playRound);
}