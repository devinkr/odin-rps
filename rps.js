// Odin Project Rock Paper Scissors


// List of choices. Order is important as a higher index beats a lower index except 0 always beats last item.

let choices = ['rock', 'paper', 'scissors']

//Computer Player that returns Rock, Paper, or Scissors and store as computerSelection

function computerPlay() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}


//Ask user to enter selection. Change to lowercase and check to see if selection is one of the valid choices.
//If not a valid choice then list valid choices and call getPlayerSelection again

let playerSelection = '';
function getPlayerSelection() {
    playerSelection = prompt(`Enter your selection: ${choices.join(', ')}`);
    playerSelection = playerSelection.toLowerCase();
    if (choices.includes(playerSelection)) {
        return;
    } else {
        console.log(`Please enter a valid choice: ${choices.join(', ')}`);
        getPlayerSelection();
    }
}


//Play a single round. Save index of playerSelection and computerSelection. Make selections pretty by capitalizing first letter
//Compare indexes. The one with higher index is winner except if index is 0 and other is last item, then 0 wins.

function playRound(playerSelection, computerSelection) {
    const playerIndex = choices.indexOf(playerSelection);
    const computerIndex = choices.indexOf(computerSelection);
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1);
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);

    if (playerIndex === computerIndex) {
        return "This round was a tie!";
    }
    else if (computerIndex === 0 && playerIndex === choices.length-1) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;        
    }
    else if (playerIndex === 0 && computerIndex === choices.length-1) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerIndex > computerIndex) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

//Play specified number of rounds. First get computer and player selections and then play round. Record results to console.

function game(rounds) {
    for (let index = 0; index < rounds; index++) {
        let computerSelection = computerPlay();
        getPlayerSelection();
        let result = playRound(playerSelection, computerSelection);
        console.log(`Round ${index+1}: ${result}`); 
    }
}

game(5);
