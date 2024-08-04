function getComputerChoice(){
    let randomNumber = getRandomNumber(99)
    if (randomNumber < 34){
        return "ROCK";
    }else if (randomNumber < 67 && randomNumber > 33){
        return "PAPER";
    }else return "SCISSORS";
    
}

//Complementary function for getComputerChoice,
//for reusability purposes.

function getRandomNumber(upperNumber){
    return Math.floor(Math.random() * (upperNumber + 1))
}

function getPlayerChoice(){
    let playerChoice = "";
    let cleanPlayerChoice = "";
    while(cleanPlayerChoice !== "ROCK" && cleanPlayerChoice !== "PAPER" && cleanPlayerChoice !== "SCISSORS"){
        playerChoice = prompt("Please enter wether you play ROCK, PAPER or SCISSORS");
        cleanPlayerChoice = trimAndCapitalizeText(playerChoice);
    }
    return cleanPlayerChoice;
}

//Complementary function that cleans the input string from the player

function trimAndCapitalizeText(string){
    return string.trim().toUpperCase();
}

function playRound(){
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) return "TIE";
    switch(playerChoice){
        case "SCISSORS":
            if (computerChoice === "PAPER") return "PLAYER";
            if (computerChoice === "ROCK") return "COMPUTER";
            break;
        case "PAPER":
            if (computerChoice === "ROCK") return "PLAYER";
            if (computerChoice === "SCISSORS") return "COMPUTER";
            break;
        case "ROCK":
            if (computerChoice === "SCISSORS") return "PLAYER";
            if (computerChoice === "PAPER") return "COMPUTER";
            break;
    }
}

function playGame(){
    let computerScore = 0;
    let playerScore = 0;
    let round = 0;

    while(round < 5){
        let winner = playRound();
        if(winner === "PLAYER") ++playerScore;
        if(winner === "COMPUTER") ++computerScore;
        ++round;
    }

    if (playerScore > computerScore)
        return "Player Wins!";
    if (playerScore < computerScore)
        return "Computer Wins!";
    
    //Return case of a tie
    return "It's a Tie!"
}
