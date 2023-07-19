let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice () {
    let random_number = Math.floor(Math.random()*3)
    return choices[random_number];
}

function getPlayerChoice () {
    let isValidChoice = false;
    let choice;
    
    // ask until player actually inputs either rock paper or scissors
    while (!isValidChoice) {
        // ask for input then capitalize first letter
        choice = prompt('Choose : rock, paper or scissors');
        choice = choice.toLowerCase();
        choice = choice.charAt(0).toUpperCase() + choice.slice(1);

        // check if choice is rock paper or scissor, exit loop if true
        if (choices.includes(choice)) {
            isValidChoice = true;
        }
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let result;
    
    if (playerSelection === computerSelection) {
        // similar choice
        result = `It's a tie! Both chose ${playerSelection}.`
    } else if (playerSelection === 'rock') {
        // player chooses rock and computer plays either scissors or paper
        result = (computerSelection === 'scissors') ?
            `You win! ${playerSelection} beats ${computerSelection}`:
            `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === 'paper') {
        //player chooses paper and computer plays rock or scissors
        result = (computerSelection === 'rock') ?
            `You win! ${playerSelection} beats ${computerSelection}`:
            `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        // player chooses scissor and computer plays paper or rock
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

        // selection and battle
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