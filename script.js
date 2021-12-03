let computerSelection = ""
function computerPlay(){                            // This will be how the computer selects either Rock, Paper, Scissors
    let rng = Math.floor(Math.random()*3+1);        // Chosing  a random number between 1 and 3
    if (rng == 1){                                  // Then assigning number to a value 1 = Rock, 2 = Paper, 3 = Scissors
        computerSelection = "rock";
    } else if (rng == 2){
        computerSelection = "paper";
    } else if (rng == 3){
        computerSelection = "scissors";
    }
}
function playRound(){ // This will take input from Player and Computer and decide winner
    computerPlay()
    let playerSelection = prompt("Rock, Paper or Scissors?")    // Asks player to make selection
    playerSelection = playerSelection.toLowerCase()             // Makes sure player inpute is case insensitive
    if (playerSelection == computerSelection){
        console.log("Tie Game")
    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You Lose");
    } else if (playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You Win")
    }
}

function game(){  // This will loop the game to a best of 5
}