let computerSelection = ""
function conputerPlay(){ //This will be how the computer selects either Rock, Paper, Scissors
    number = Math.floor(Math.random()*3 +1);
    if (number = 1){
        computerSelection = "Rock";
    } else if (number = 2){
        computerSelection = "Paper";
    }else {
        computerSelection = "Scissors";
    }
    return computerSelection
    console.log(computerSelection)
}

function playRound(playerSelection, computerSelection){ // This will take input from Player and Computer and decide winner

}

function game(){  // This will loop the game to a best of 5

}