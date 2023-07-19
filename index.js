const MOVES = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice () {
    let random_number = Math.floor(Math.random()*3)
    return choices[random_number];
}

function getPlayerChoice () {
    let isValidChoice = false;
    let choice;
    
    // ask until player actually inputs either rock paper or scissors
    while (!isValidChoice) {
        choice = prompt('Choose : rock, paper or scissors');
        choice = choice.toLowerCase();
        choice = choice.charAt(0).toUpperCase() + choice.slice(1);

        if (MOVES.includes(choice)) {
            isValidChoice = true;
        }
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let result;
    
    if (playerSelection === computerSelection) {
        result = `It's a tie! Both chose ${playerSelection}.`
    } else if (playerSelection === 'rock') {
        result = (computerSelection === 'scissors') ?
            `You win! ${playerSelection} beats ${computerSelection}`:
            `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === 'paper') {
        result = (computerSelection === 'rock') ?
            `You win! ${playerSelection} beats ${computerSelection}`:
            `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        result = (computerSelection === 'paper') ?
            `You win! ${playerSelection} beats ${computerSelection}`:
            `You lose! ${computerSelection} beats ${playerSelection}`; 
    }
    
    return result;
}

function game() {
    let currentRound = 0;
    const maxRounds = 5;
    let keepPlaying = true;

    while (keepPlaying) {
        currentRound += 1;
        console.log(`Round ${currentRound}, fight!`);

        // selection and battle via console
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log('You chose: ',playerSelection);
        console.log('Computer chose: ', computerSelection);
        console.log(playRound(playerSelection, computerSelection));

        if (currentRound === maxRounds) {
            keepPlaying = false;
            console.log('Thanks for playing!')
        }
    }
}


game();