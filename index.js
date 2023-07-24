// const MOVES = ['Rock', 'Paper', 'Scissors'];
// const rock = document.querySelector('.rock');
// const paper = document.querySelector('.paper');
// const scissors = document.querySelector('.scissors');

// let playerSelection;
// let playerScore = 0;
// let computerScore = 0;

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

function createUI() {
    const mainContainer = document.querySelector('.main-container');
    const computerStats = document.createElement('div');
    const outcome = document.createElement('div');
    const playerStats = document.createElement('div');

}

// rock.addEventListener('click', () => {
//     const computerSelection = getComputerChoice();
//     playerSelection = rock.dataset.choice;
//     let winner = playRound(playerSelection, computerSelection);
//     console.log(winner, playerSelection, playerScore, computerSelection, computerScore);
// })

function startGame() {
    const startScreen = document.querySelector('.start-screen');
    startScreen.style.display = 'none';
}


