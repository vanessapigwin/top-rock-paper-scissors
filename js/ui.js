function createUI() {
    const gameContainer = document.createElement('div');
    const computerDiv = document.createElement('div');
    const playerDiv = document.createElement('div');

    // computer
    const computerStatsDiv = document.createElement('div');
    const computerHpBarDiv = document.createElement('div');
    const computerHpDiv = document.createElement('div');
    const computerP = document.createElement('p');
    const computerOutcomeDiv = document.createElement('div');
    const computerImg = document.createElement('img');

    computerP.textContent = 'HP: 5 / 5';
    computerOutcomeDiv.textContent = 'I\'ll only need one core for you!';
    computerImg.src = 'images/computer.png';

    computerHpBarDiv.appendChild(computerHpDiv);
    computerStatsDiv.appendChild(computerHpBarDiv);
    computerStatsDiv.appendChild(computerP);
    computerStatsDiv.appendChild(computerOutcomeDiv);
    computerDiv.appendChild(computerStatsDiv);
    computerDiv.appendChild(computerImg);
    gameContainer.appendChild(computerDiv);
    
    gameContainer.classList.add('main-container', 'game-container');
    computerDiv.classList.add('stats-outcome', 'computer-stats');
    computerStatsDiv.classList.add('computer-stats');
    computerHpBarDiv.classList.add('hp-bar');
    computerHpDiv.classList.add('hp');
    computerOutcomeDiv.classList.add('outcome-text');

    // player
    const playerImg = document.createElement('img');
    const playerStatsDiv = document.createElement('div');
    const playerHpBarDiv = document.createElement('div');
    const playerHpDiv = document.createElement('div');
    const playerP = document.createElement('p');
    const playerOutcomeDiv = document.createElement('div');

    playerP.textContent = 'HP: 5 / 5';
    playerOutcomeDiv.textContent = 'Computer wants to challenge you...';
    playerImg.src = 'images/dragon.png';

    playerHpBarDiv.appendChild(playerHpDiv);
    playerStatsDiv.appendChild(playerHpBarDiv);
    playerStatsDiv.appendChild(playerP);
    playerStatsDiv.appendChild(playerOutcomeDiv);
    playerDiv.appendChild(playerImg);
    playerDiv.appendChild(playerStatsDiv);
    gameContainer.appendChild(playerDiv);

    playerDiv.classList.add('stats-outcome', 'player-stats');
    playerStatsDiv.classList.add('player-stats');
    playerHpBarDiv.classList.add('hp-bar');
    playerHpDiv.classList.add('hp');
    playerOutcomeDiv.classList.add('outcome-text');

    // selection
    const buttonContainer = document.createElement('div');
    const rockDiv = document.createElement('div');
    const paperDiv = document.createElement('div');
    const scissorsDiv = document.createElement('div');
    const rockLink = document.createElement('a');
    const paperLink = document.createElement('a');
    const scissorsLink = document.createElement('a');
    const rockArrow = document.createElement('span');
    const paperArrow = document.createElement('span');
    const scissorsArrow = document.createElement('span');

    rockLink.innerHTML = '<span class="arrow">&#9656 </span>Rock';
    paperLink.innerHTML = '<span class="arrow">&#9656 </span>Paper';
    scissorsLink.innerHTML = '<span class="arrow">&#9656 </span>Scissors';
    rockLink.dataset.choice = 'Rock';
    paperLink.dataset.choice = 'Paper';
    scissorsLink.dataset.choice = 'Scissors';

    rockDiv.appendChild(rockLink);
    paperDiv.appendChild(paperLink);
    scissorsDiv.appendChild(scissorsLink);
    buttonContainer.appendChild(rockDiv);
    buttonContainer.appendChild(paperDiv);
    buttonContainer.appendChild(scissorsDiv);
    gameContainer.appendChild(buttonContainer);

    rockArrow.classList.add('arrow');
    paperArrow.classList.add('arrow');
    scissorsArrow.classList.add('arrow');
    rockLink.classList.add('rock');
    paperLink.classList.add('paper');
    scissorsLink.classList.add('scissors');
    rockDiv.classList.add('move');
    paperDiv.classList.add('move');
    scissorsDiv.classList.add('move');
    buttonContainer.classList.add('button-container')

    // add game container
    const mainContainer = document.querySelector('.main-container');
    mainContainer.appendChild(gameContainer);
}

function updateUI(winner, playerHp, playerSelection, computerHp, computerSelection) {
    const computerHpText = document.querySelector('.computer-stats > p');
    const computerMove = document.querySelector('.computer-stats > .outcome-text');
    const computerHpBar = document.querySelector('.computer-stats > .hp-bar');
    const computerCurrentHp = computerHpBar.firstElementChild;
    const playerHpText = document.querySelector('.player-stats > p');
    const playerMove = document.querySelector('.player-stats > .outcome-text');
    const playerHpBar = document.querySelector('.player-stats > .hp-bar');
    const playerCurrentHp = playerHpBar.firstElementChild;

    const computerHpBarWidth = parseInt(getComputedStyle(computerHpBar).getPropertyValue('width').slice(0, -2));
    const playerHpBarWidth = parseInt(getComputedStyle(playerHpBar).getPropertyValue('width').slice(0, -2));
    console.log(computerHpBarWidth, playerHpBarWidth)

    computerHpText.textContent = `HP: ${computerHp} / 5`;
    playerHpText.textContent = `HP: ${playerHp} / 5`;

    if (winner === 'player') {
        playerMove.textContent = `You used ${playerSelection}, it was super effective!`;
        computerMove.textContent = `Computer used ${computerSelection}, it missed...`;
        computerCurrentHp.classList.add('hp-damaged');
        computerCurrentHp.style.width = `${computerHp / 5 * computerHpBarWidth}px`;
    } else if (winner === 'computer') {
        computerMove.textContent = `Computer used ${computerSelection}, it was super effective!`;
        playerMove.textContent = `You used ${playerSelection}, it missed...`;
        playerCurrentHp.classList.add('hp-damaged');
        playerCurrentHp.style.width = `${playerHp / 5 * playerHpBarWidth}px`;
    } else {
        computerMove.textContent = `Computer used ${computerSelection}, it wasn't effective.`;
        playerMove.textContent = `You used ${playerSelection}, it wasn't effective.`;
    }
}