// Kevin Kelly
//   5/16/23
//   Created as part of 'The Odin Project' course

const container = document.querySelector('#container');
const roundMsg = document.createElement("div");
roundMsg.classList.add('roundMsg');
container.appendChild(roundMsg);
const roundResult = document.createElement("div");
roundResult.classList.add('roundResult');
container.appendChild(roundResult);
const user = document.createElement('p');
user.classList.add('user');
roundResult.appendChild(user);
const comp = document.createElement('p');
comp.classList.add('comp');
roundResult.appendChild(comp);


const overAllResult = document.createElement("div");
overAllResult.classList.add('overAllResult');
container.appendChild(overAllResult);

let playerScoreCount = 0;
let computerScoreCount = 0;

const btn = document.querySelectorAll('.btn');

btn.forEach(btn =>
    btn.addEventListener('click', function (e) {
        let playerSelection = e.target.innerText;
        let computerSelection = getRandomChoice();
        console.log(computerSelection);
        user.textContent = 'You chose: ' + playerSelection;
        comp.textContent =  'Computer chose: ' + computerSelection;
        roundMsg.textContent = playRound(playerSelection, computerSelection);
        
        
        overAllResult.innerHTML = 'Your Score: ' + playerScoreCount + '<br>Computer Score: ' + computerScoreCount;

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
        user.classList.remove('win');
        comp.classList.remove('lose');
        return ('Tie!');
    } else if ((playerSelection == 'Rock' && computerSelection == 'Paper') || 
                (playerSelection == 'Paper' && computerSelection == 'Scissors') ||
                (playerSelection == 'Scissors' && computerSelection == 'Rock')) {
                computerScoreCount++;
                user.classList.remove('win');
                comp.classList.add('lose');
                return ('You Lose! ' + computerSelection + ' beats ' + playerSelection + '!');
    } else if ((playerSelection == 'Scissors' && computerSelection == 'Paper') ||
                (playerSelection == 'Rock' && computerSelection == 'Scissors') || 
                (playerSelection == 'Paper' && computerSelection == 'Rock')) {
                playerScoreCount++;
                comp.classList.remove('lose');
                user.classList.add('win');
                return 'You Win! ' + playerSelection + ' beats ' + computerSelection + '!';
    } 
    }

