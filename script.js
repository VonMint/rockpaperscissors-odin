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
