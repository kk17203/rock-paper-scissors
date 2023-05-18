// Kevin Kelly
//   5/16/23
//   Created as part of 'The Odin Project' course

let roundCount = 1;
let playerScoreCount = 0;
let computerScoreCount = 0;

// loop game 5 rounds
while (roundCount <= 5) {

// randomly choose rock, paper, or scissors
let compChoice = ['Rock', 'Paper', 'Scissors'];

let getComputerChoice = compChoice[Math.floor(Math.random() * 3)];

// console.log(getComputerChoice);

// convert getComputerChoice to uppercase (to make case insensitive)
let computerSelection = getComputerChoice.toUpperCase();

//console.log(computerSelection);

// get user selection
let getPlayerChoice = prompt('Choose "Rock", "Paper", or "Scissors"', 'Rock', 'Paper', 'Scissors');

// console.log(getPlayerChoice);

// convert getPlayerChoice to uppercase (to make case insensitive)
let playerSelection = getPlayerChoice.toUpperCase();

console.log(playerSelection);

// function that compares selections and declares winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return ('Tie!');
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        return ('You Lose!');
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        return ('You Win!');
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        return ('You Lose!');
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        return ('You Win!');
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        return ('You Lose!');
    } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        return ('You Win!');
    }
    }

// display round winner
console.log(playRound(playerSelection, computerSelection));

// keep track of overall score
if (playRound(playerSelection, computerSelection) == 'You Win!') {
    playerScoreCount++
} else if (playRound(playerSelection, computerSelection) == 'You Lose!') {
    computerScoreCount++
}

// display overall score
console.log('Your Score: ' + playerScoreCount);
console.log('Computer Score: ' + computerScoreCount);

roundCount++;
}

// display overall winner
if (playerScoreCount > computerScoreCount) {
    alert ('Congratulations! You Won!');
} else if (playerScoreCount < computerScoreCount) {
    alert ('Bummer! You Lost!');
} else {
    alert ("Unbelievable! It's a Tie!");
}


