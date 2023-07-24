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
    let mainContainer = document.querySelector('.main-container');
    let computerDiv = document.createElement('div');
    let playerDiv = document.createElement('div');
    let choiceDiv = document.createElement('div');

    // computer
    let computerStatsDiv = document.createElement('div');
    let computerHpBarDiv = document.createElement('div');
    let computerHpDiv = document.createElement('div');
    let computerP = document.createElement('p');
    let computerOutcomeDiv = document.createElement('div');
    let computerImg = document.createElement('img');

    computerP.textContent = 'HP: 5 / 5';
    computerOutcomeDiv.textContent = 'I\'ll only need one core for you!';
    computerImg.src = 'images/computer.png';

    computerHpBarDiv.appendChild(computerHpDiv);
    computerStatsDiv.appendChild(computerHpBarDiv);
    computerStatsDiv.appendChild(computerP);
    computerStatsDiv.appendChild(computerOutcomeDiv);
    computerDiv.appendChild(computerStatsDiv);
    computerDiv.appendChild(computerImg);
    mainContainer.appendChild(computerDiv);
    
    mainContainer.classList.add('main-container');
    computerDiv.classList.add('stats-outcome', 'computer-stats');
    computerStatsDiv.classList.add('computer-stats');
    computerHpBarDiv.classList.add('hp-bar');
    computerHpDiv.classList.add('hp');

    // player
    let playerImg = document.createElement('img');
    let playerStatsDiv = document.createElement('div');
    let playerHpBarDiv = document.createElement('div');
    let playerHpDiv = document.createElement('div');
    let playerP = document.createElement('p');
    let playerOutcomeDiv = document.createElement('div');

    playerP.textContent = 'HP: 5 / 5';
    playerOutcomeDiv.textContent = 'Computer wants to challenge you...';
    playerImg.src = 'images/dragon.png';

    playerHpBarDiv.appendChild(playerHpDiv);
    playerStatsDiv.appendChild(playerHpBarDiv);
    playerStatsDiv.appendChild(playerP);
    playerStatsDiv.appendChild(playerOutcomeDiv);
    playerDiv.appendChild(playerImg);
    playerDiv.appendChild(playerStatsDiv);
    mainContainer.appendChild(playerDiv);

    playerDiv.classList.add('stats-outcome', 'player-stats');
    playerStatsDiv.classList.add('player-stats');
    playerHpBarDiv.classList.add('hp-bar');
    playerHpDiv.classList.add('hp');
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

    createUI();
}


