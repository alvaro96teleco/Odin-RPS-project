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

function playRound(event){

    const computerChoice = getComputerChoice();
    const humanChoice = event.currentTarget.textContent.trim();

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
    
    if (result != "Error in the score"){
        rounds++;
    }

    const scoreContainer = document.querySelector(".score-container");
    const resultDiv = document.createElement("div");

    resultDiv.textContent = "Round " + rounds + ": " + result;
    scoreContainer.appendChild(resultDiv);

    if (rounds >= 5){
        const finalScoreDiv = document.createElement("div");
        finalScoreDiv.textContent = "\nFinal score: Your score = " + humanScore + " Bot score = " + computerScore;
        scoreContainer.appendChild(finalScoreDiv);

        rockButton.removeEventListener("click", playRound);
        paperButton.removeEventListener("click", playRound);
        scissorsButton.removeEventListener("click", playRound);
    }

}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
    // returns 0, 1, ..., max
}

let humanScore = 0;
let computerScore = 0;
let rounds = 0;

const buttonsContainer = document.querySelector(".buttons-container");

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);

buttonsContainer.appendChild(rockButton);
buttonsContainer.appendChild(paperButton);
buttonsContainer.appendChild(scissorsButton);




