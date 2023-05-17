let guessCount = 1;

while (guessCount <= 5) {

// randomly choose rock, paper, or scissors
let compChoice = ['Rock', 'Paper', 'Scissors'];

let getComputerChoice = compChoice[Math.floor(Math.random() * 3)];

console.log(getComputerChoice);

// convert getComputerChoice to uppercase (to make case insensitive)
let computerSelection = getComputerChoice.toUpperCase();

console.log(computerSelection);

// get user selection
let getPlayerChoice = prompt('Choose "Rock", "Paper", or "Scissors"', 'Rock', 'Paper', 'Scissors');

console.log(getPlayerChoice);

// convert getPlayerChoice to uppercase (to make case insensitive)
let playerSelection = getPlayerChoice.toUpperCase();

console.log(playerSelection);

// function that compares selections and declares winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return ('Tie!');
    } else if (playerSelection = 'ROCK' && computerSelection == 'PAPER') {
        return ('You Lose!');
    } else if (playerSelection = 'SCISSORS' && computerSelection == 'PAPER') {
        return ('You Win!');
    } else if (playerSelection = 'PAPER' && computerSelection == 'SCISSORS') {
        return ('You Lose!');
    } else if (playerSelection = 'ROCK' && computerSelection == 'SCISSORS') {
        return ('You Win!');
    } else if (playerSelection = 'SCISSORS' && computerSelection == 'ROCK') {
        return ('You Lose!');
    } else if (playerSelection = 'PAPER' && computerSelection == 'ROCK') {
        return ('You Win!');
    }
    }

    console.log(playRound(playerSelection, computerSelection));

    guessCount++;
}



