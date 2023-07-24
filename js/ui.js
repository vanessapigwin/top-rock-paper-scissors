function createUI() {
    let mainContainer = document.querySelector('.main-container');
    let computerDiv = document.createElement('div');
    let playerDiv = document.createElement('div');

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

    // selection
    let buttonContainer = document.createElement('div');
    let rockDiv = document.createElement('div');
    let paperDiv = document.createElement('div');
    let scissorsDiv = document.createElement('div');
    let rockLink = document.createElement('a');
    let paperLink = document.createElement('a');
    let scissorsLink = document.createElement('a');
    let rockArrow = document.createElement('span');
    let paperArrow = document.createElement('span');
    let scissorsArrow = document.createElement('span');

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
    mainContainer.appendChild(buttonContainer);

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
}