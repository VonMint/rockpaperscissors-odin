function getComputerChoice(){
    let randomNumber = getRandomNumber(99)
    if (randomNumber < 34){
        return "ROCK";
    }else if (randomNumber < 67 && randomNumber > 33){
        return "PAPER";
    }else{
        return "SCISSORS";
    }
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
