// Kevin Kelly
//   5/16/23
//   Created as part of 'The Odin Project' course

let playerScoreCount = 0;
let computerScoreCount = 0;

// loop until player or comp gets 5 wins
for (let i = 0; i = playerScoreCount < 5 && computerScoreCount < 5; i++) {

// randomly choose rock, paper, or scissors
let compChoice = ['Rock', 'Paper', 'Scissors'];

let getComputerChoice = compChoice[Math.floor(Math.random() * 3)];

// convert getComputerChoice to uppercase (to make case insensitive)
let computerSelection = getComputerChoice.toUpperCase();

// get user selection
//let getPlayerChoice = prompt('Choose "Rock", "Paper", or "Scissors"', '');
const btn = document.querySelectorAll('.btn');

btn.forEach(btn =>
    btn.addEventListener('click', function (e) {
        console.log(e.target.innerText)
    }));

// console.log(getPlayerChoice);

// convert getPlayerChoice to uppercase (to make case insensitive)
let playerSelection = getPlayerChoice.toUpperCase();

// function that compares selections and declares winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return ('Tie!');
    } else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        return ('You Lose! Paper beats rock!');
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        return ('You Win! Scissors beat paper!');
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        return ('You Lose! Scissors beat paper!');
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        return ('You Win! Rock beats scissors!');
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        return ('You Lose! Rock beats scissors!');
    } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        return ('You Win! Paper beats Rock!');
    }
    }

// display round winner
console.log(playRound(playerSelection, computerSelection));

// keep track of overall score
if (playRound(playerSelection, computerSelection).includes('You Win!')) {
    playerScoreCount++
} else if (playRound(playerSelection, computerSelection).includes('You Lose!')) {
    computerScoreCount++
}

// display overall score
console.log('Your Score: ' + playerScoreCount);
console.log('Computer Score: ' + computerScoreCount);
 
}

// display overall winner
if (playerScoreCount > computerScoreCount) {
    alert ('Congratulations! You Won!');
} else if (playerScoreCount < computerScoreCount) {
    alert ('Bummer! You Lost!');
} else {
    alert ("Unbelievable! It's a Tie!");
}

