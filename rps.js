console.log('Hello World');

const options = ['rock', 'paper', 'scissors'];

const fBtn = document.querySelector('.fBtn');
const sBtn = document.querySelector('.sBtn');
const tBtn = document.querySelector('.tBtn');

const result = document.getElementById('logs');
const score = document.getElementById('score');

let computerScore = 0;
let playerScore = 0;

function disableButtons () {
    fBtn.disabled = true;
    sBtn.disabled = true;
    tBtn.disabled = true;
}

fBtn.addEventListener('click', () => 
playRound('rock', getComputerChoice()));

sBtn.addEventListener('click', () => 
playRound('paper', getComputerChoice()));

tBtn.addEventListener('click', () => 
playRound('scissors', getComputerChoice()));

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == 'Tie') {
        logs.textContent += `It's a Tie!\n`;
    }
    else if (result == 'Player') {
        playerScore++;
        logs.textContent += `You win! ${playerSelection} beats ${computerSelection}\n`;
    }
    else {
        computerScore++;
        logs.textContent += `You lose! ${computerSelection} beats ${playerSelection}\n`;
    }

    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;


    if (playerScore == 5) {
    logs.textContent += `You win the game!`;
    disableButtons();
}

    else if (computerScore == 5) {
    logs.textContent += `You lose the game!`;
    disableButtons();
}
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Tie';
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        return 'Player';
    }
    else {
        return 'Computer';
    }
}






// function getPlayerChoice() {
//     let validatedInput = false;
//     while (validatedInput == false) {
//         const choice = prompt('Rock Paper Scissors');
//         if (choice == null) {
//             continue;
//         }
//         const choiceInLower = choice.toLowerCase();
//         if (options.includes(choiceInLower)) {
//             validatedInput = true;
//             return choiceInLower;
//         }
//     }
// }

// function game() {
//     let scorePlayer = 0;
//     let scoreComputer = 0;
//     console.log('Welcome!')
//     // for (let i = 0; i < 5; i++) 
//     while (true) {
//         const playerSelection = getPlayerChoice();
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//         console.log("----------");
//         if (checkWinner(playerSelection, computerSelection) == 'Player') {
//             scorePlayer++;
//         }
//         else if (checkWinner(playerSelection, computerSelection) == 'Computer') {
//             scoreComputer++;
//         }
//     }
//     console.log("Game Over")
//     if (scorePlayer > scoreComputer) {
//         console.log('Player was the winner!');
//     }
//     else if (scorePlayer < scoreComputer) {
//         console.log('Computer was the winner');
//     }
//     else {
//         console.log('Its a tie!');
//     }
// }

// game()