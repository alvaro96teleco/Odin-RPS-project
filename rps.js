console.log("Testing message");

function getComputerChoice(){
    let randomInt = getRandomInt(3);
    let decision = "";
    
    if (randomInt == 0){
        decision = "Rock";
    } else if (randomInt == 1){
        decision = "Paper";
    } else if (randomInt == 2){
        decision = "Scissors";
    } else {
        decision = "error getting random value";
    }

    return decision;
}

function getHumanChoice(){
    let decision = "";
    decision = prompt("Please, make your choce: ");

    if (decision == null){
        decision = "error, no human input";
    } else if (decision == "Rock" || decision == "Paper" || decision == "Scissors"){
        return decision;
    }else {
        console.log("Error getting human choice");
    }
    return decision;
}

function playRound(humanChoice, computerChoice){
    let result = null;
    let WIN = "You win! " + humanChoice + " beats " + computerChoice; 
    let LOSS = "You lose! " + computerChoice + " beats " + humanChoice; 
    let TIES = "Ties!";

    if (humanChoice == computerChoice){
        result = TIES;
    } else if (humanChoice == "Rock"){
        if (computerChoice == "Scissors"){
            result = WIN;
        }else{
            result = LOSS;
        }
    } else if (humanChoice == "Paper"){
        if (computerChoice == "Rock"){
            result = WIN;
        }else{
            result = LOSS;
        }
    } else if (humanChoice == "Scissors"){
        if (computerChoice == "Paper"){
            result = WIN;
        }else{
            result = LOSS;
        }
    } else {
        result == "Round error";
    }
    
    if (result == WIN){
        humanScore++;
    } else if (result == LOSS){
        computerScore++;
    } else if (result == TIES){
        result = TIES;
    } else {
        result = "Error in the score";
    }
    return result;
}

function playGame(){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));

    console.log("Final results! human: " + humanScore + " and bot: " + computerScore);

}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
    // returns 0, 1, ..., max
}

let humanScore = 0;
let computerScore = 0;

playGame();



