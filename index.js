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
    let hpBarDiv = document.createElement('div');
    let hpDiv = document.createElement('div');
    let computerP = document.createElement('p');
    let computerOutcomeDiv = document.createElement('div');
    let computerImg = document.createElement('img');

    computerP.textContent = 'HP: 5 / 5';
    computerOutcomeDiv.textContent = 'I\'ll only need one core for you!';
    computerImg.src = 'images/computer.png';

    hpBarDiv.appendChild(hpDiv);
    computerStatsDiv.appendChild(hpBarDiv);
    computerStatsDiv.appendChild(computerP);
    computerStatsDiv.appendChild(computerOutcomeDiv);
    computerDiv.appendChild(computerStatsDiv);
    computerDiv.appendChild(computerImg);
    mainContainer.appendChild(computerDiv);
    
    mainContainer.classList.add('main-container');
    computerDiv.classList.add('stats-outcome', 'computer-stats');
    computerStatsDiv.classList.add('computer-stats');
    hpBarDiv.classList.add('hp-bar');
    hpDiv.classList.add('hp');

    // player
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


