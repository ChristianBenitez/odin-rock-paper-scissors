
function computerPlay(){                            // This will be how the computer selects either Rock, Paper, Scissors
    let rng = Math.floor(Math.random()*3+1);        // Chosing  a random number between 1 and 3
    if (rng == 1){                                  // Then assigning number to a value 1 = Rock, 2 = Paper, 3 = Scissors
        computerSelection = "Rock";
    } else if (rng == 2){
        computerSelection = "Paper";
    } else if (rng == 3){
        computerSelection = "Scissors";
    }
    return computerSelection
}

function playRound(playerSelection, computerSelection){ // This will take input from Player and Computer and decide winner

}

function game(){  // This will loop the game to a best of 5
}