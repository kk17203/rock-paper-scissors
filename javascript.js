// Kevin Kelly
//   5/16/23
//   Created as part of 'The Odin Project' course

let playerScoreCount = 0;
let computerScoreCount = 0;

const btn = document.querySelectorAll('.btn');

btn.forEach(btn =>
    btn.addEventListener('click', function (e) {
        let playerSelection = e.target.innerText;
        let computerSelection = getRandomChoice();
        console.log('You chose: ' + playerSelection);
        console.log('Computer chose: ' + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        
        
        console.log('Your Score: ' + playerScoreCount);
        console.log('Computer Score: ' + computerScoreCount);

        if (playerScoreCount === 5 || computerScoreCount === 5) {
            if (playerScoreCount > computerScoreCount) {
                alert ('Congratulations! You Won!');
            } else if (playerScoreCount < computerScoreCount) {
                alert ('Bummer! You Lost!');
            } else {
                alert ("Unbelievable! It's a Tie!");
            }
        }
    }));


// randomly choose rock, paper, or scissors
function getRandomChoice() {
    let compChoice = ['Rock', 'Paper', 'Scissors'];
    return compChoice[Math.floor(Math.random() * 3)];
}

// determine round winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return ('Tie!');
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        computerScoreCount++;
        return ('You Lose! Paper beats rock!');
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        playerScoreCount++;
        return ('You Win! Scissors beat paper!');
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        computerScoreCount++;
        return ('You Lose! Scissors beat paper!');
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        playerScoreCount++;
        return ('You Win! Rock beats scissors!');
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        computerScoreCount++;
        return ('You Lose! Rock beats scissors!');
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        playerScoreCount++;
        return ('You Win! Paper beats Rock!');
    }
    }

