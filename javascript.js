// Kevin Kelly
//   5/16/23
//   Created as part of 'The Odin Project' course

let playerScoreCount = 0;
let computerScoreCount = 0;

// loop until player or comp gets 5 wins
for (let i = 0; i = playerScoreCount < 5 && computerScoreCount < 5; i++) {

// randomly choose rock, paper, or scissors
let compChoice = ['Rock', 'Paper', 'Scissors'];

let getComputerSelection = compChoice[Math.floor(Math.random() * 3)];

// convert getComputerChoice to uppercase (to make case insensitive)
//let computerSelection = getComputerChoice.toUpperCase();

// get user selection
//let getPlayerChoice = prompt('Choose "Rock", "Paper", or "Scissors"', '');
//function playerChoice (getPlayerChoice) {
const btn = document.querySelectorAll('.btn');
let playerSelection = btn.forEach(btn => btn.addEventListener('click', function(e) {return(e.target.innerText);}));




 console.log(playerSelection);

// convert getPlayerChoice to uppercase (to make case insensitive)
//let playerSelection = getPlayerChoice.toUpperCase();

// function that compares selections and declares winner
function playRound(playerSelection, getComputerSelection) {
    if (playerSelection == getComputerSelection) {
        return ('Tie!');
    } else if (playerSelection == 'Rock' && getComputerSelection == 'Paper') {
        return ('You Lose! Paper beats rock!');
    } else if (playerSelection == 'Scissors' && getComputerSelection == 'Paper') {
        return ('You Win! Scissors beat paper!');
    } else if (playerSelection == 'Paper' && getComputerSelection == 'Scissors') {
        return ('You Lose! Scissors beat paper!');
    } else if (playerSelection == 'Rock' && getComputerSelection == 'Scissors') {
        return ('You Win! Rock beats scissors!');
    } else if (playerSelection == 'Scissors' && getComputerSelection == 'Rock') {
        return ('You Lose! Rock beats scissors!');
    } else if (playerSelection == 'Paper' && getComputerSelection == 'Rock') {
        return ('You Win! Paper beats Rock!');
    }
    }

// display round winner
console.log(playRound(playerSelection, getComputerSelection));

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


