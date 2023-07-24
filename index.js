const MOVES = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice () {
    let random_number = Math.floor(Math.random()*3)
    return MOVES[random_number];
}

function playRound(playerSelection, computerSelection) {
    let winner;
    
    if (playerSelection === computerSelection) {
        winner = 'Tie';
    } else if (playerSelection === 'rock') {
        winner = (computerSelection === 'scissors') ? 'player':'computer';
    } else if (playerSelection === 'paper') {
        winner = (computerSelection === 'rock') ? 'player':'computer';
    } else {
        winner = (computerSelection === 'paper') ? 'player':'computer';
    }
    return winner;
}

function startGame() {
    const startScreen = document.querySelector('.start-screen');
    startScreen.style.display = 'none';

    createUI();

    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');
    let playerSelection;
    let playerHp = 5;
    let computerHp = 5;

    rock.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playerSelection = rock.dataset.choice;
    let winner = playRound(playerSelection, computerSelection);
    console.log(winner, playerSelection, playerHp, computerSelection, computerHp);
})

}