//New RPS with UI

/* centered H1 with bold ROCK italic PAPER, SCISSORS
Score with Player: and Computer: starting at 0
Number of rounds played: starting at 0
three buttons ROCK, PAPER, SCISSORS.
Add event listener to each button. When clicked button will calculate computerSelection
and get playerSelection from the button.
Call playRound() function sending both selections and return the winner.
playRound() function will need to update score and number of rounds played.
After 5 rounds a Winner will be called.
*/

// Odin Project Rock Paper Scissors


// List of choices. Order is important as a higher index beats a lower index except 0 always beats last item.

let choices = ['ROCK', 'PAPER', 'SCISSORS']

// playRound

// set DOM element variables

const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore')
const round = document.querySelector('#roundNum');
const results = document.querySelector('#results');
const buttons = document.querySelectorAll('.btn');

function playRound(e) {
    const playerSelection = this.textContent;
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    const playerIndex = choices.indexOf(playerSelection);
    const computerIndex = choices.indexOf(computerSelection);
    let winner = '';
    if (playerIndex === computerIndex) {
        winner = 'even';
    }
    else if ((playerIndex > computerIndex && !(computerIndex === 0 && playerIndex === choices.length-1)) || (playerIndex === 0 && computerIndex === choices.length-1)) {
        winner = 'player';
    }
    else {
        winner = 'computer';
    }
    updateRound(winner, playerIndex, computerIndex);
}

function updateRound(winner, playerIndex, computerIndex) {
    if (winner === 'even') {
        results.textContent = `TIE: ${choices[playerIndex]} - ${choices[computerIndex]}`;
    }
    else if (winner === 'player') {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        results.textContent = `YOU WIN: ${choices[playerIndex]} beats ${choices[computerIndex]}`;
    }
    else if (winner === 'computer') {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        results.textContent = `COMPUTER WINS: ${choices[computerIndex]} beats ${choices[playerIndex]}`;
    }
    if (parseInt(playerScore.textContent) >= 5 || parseInt(computerScore.textContent) >= 5) {
        const gameWin = document.createElement('h1');
        if (parseInt(playerScore.textContent) > parseInt(computerScore.textContent)) {           
            gameWin.textContent = "YOUR WINNAR";
        }
        else {
            gameWin.textContent = "COMPUTER ARE WINNAR";
        }
        results.appendChild(gameWin);
        buttons.forEach(button => button.disabled = true);
        return;
    }
    round.textContent = parseInt(round.textContent) + 1;
}

// Add eventListener to buttons

buttons.forEach(button => button.addEventListener('click', playRound));


//Play a single round. Save index of playerSelection and computerSelection. Make selections pretty by capitalizing first letter
//Compare indexes. The one with higher index is winner except if index is 0 and other is last item, then 0 wins.

//function playRound(playerSelection) {
 //   console.log(playerSelection);
 //   const playerIndex = choices.indexOf(playerSelection);
 //   const computerIndex = choices.indexOf(computerSelection);

//    if (playerIndex === computerIndex) {
//        return "This round was a tie!";
//    }
//    else if (computerIndex === 0 && playerIndex === choices.length-1) {
//        return `You Lose! ${choices[computerIndex]} beats ${choices[playerIndex]}`;        
//    }
//    else if (playerIndex === 0 && computerIndex === choices.length-1) {
//        return `You Win! ${choices[playerIndex]} beats ${choices[computerIndex]}`;
//    }
//    else if (playerIndex > computerIndex) {
//        return `You Win! ${choices[playerIndex]} beats ${choices[computerIndex]}`;
//    }
//    else {
//        return `You Lose! ${choices[computerIndex]} beats ${choices[playerIndex]}`;
//    }
//}

//Play specified number of rounds. First get computer and player selections and
//then play round. Record results to console.

//function game(rounds) {
//    for (let index = 0; index < rounds; index++) {
//        let computerSelection = computerPlay();
//        getPlayerSelection();
//        let result = playRound(playerSelection, computerSelection);
//        console.log(`Round ${index+1}: ${result}`); 
//    }
//}

//game(5);
