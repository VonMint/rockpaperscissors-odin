# rockpaperscissors-odin
Rock-Paper-Scissors JavaScript implementation project from The Odin Project Curriculum

## The Problem
*Extracted from The Odin Project Lesson*
- Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.
- Your game will be played by a human player. You will write a function that takes the user choice and returns it.
- Your game will keep track of the players score. You will write variables to keep track of the players score.
- Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
- Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

## Pseudocode

Write a function that will return a choice between "rock", "paper", or "scissors". This choice will be saved in a variable
```
FUNCTION getComputerChoice
    GET randomNumber between 1 and 99
    IF randomNumber is between 1 and 33 THEN
        RETURN choice = "ROCK"
    ELSE IF randomNumber is between 34 and 66 THEN
        RETURN choice = "PAPER"
    ELSE
        RETURN choice = "SCISSORS" 
```

For the Player, the choice will be catched via a prompt on the screen, this input then has to be cleaned up to be compared with the computer's Random choice.

```
FUNCTION getPlayerChoice
    DEFINE playerChoice
    WHILE playerChoice IS NOT "ROCK" OR "PAPER" OR "SCISSORS"
        GET playerChoice
        CALL cleanPlayerChoice
    ENDWHILE
    RETURN playerChoice

The cleanPlayerChoice function cleans up the input of the user by trimming whitespaces and modifying the string into being ALLCAPS

FUNCTION cleanPlayerChoice (playerChoice)
    METHOD trimWhiteSpace (playerChoice)
    METHOD allCaps (playerChoice)
    RETURN playerChoice
```

Function that will play a round for the game:

```
FUNCTION playRound
    DEFINE computerChoice = CALL getComputerChoice
    DEFINE playerChoice = CALL getPlayerChoice
    IF playerChoice EQUALS computerChoice
        RETURN "Tie"
    CASE (playerChoice, computerChoice) OF
        "SCISSORS" AND "PAPER":
            RETURN Player
        "SCISSORS" AND "ROCK":
            RETURN Computer
        "PAPER" AND "SCISSORS":
            RETURN Computer
        "PAPER" AND "ROCK":
            RETURN Player
        "ROCK" AND "SCISSORS":
            RETURN Player
        "ROCK" AND "PAPER":
            RETURN Computer
    ENDCASE
```

Function that calls the control of the game and counts the player's score vs the computer's

```
FUNCTION playGame
    SET computerScore = 0
    SET playerScore = 0
    SET round = 1
    WHILE round < 5
        GET winner = CALL playRound
        IF winner IS player THEN
            INCREMENT playerScore
        ELSE
            INCREMENT computerScore
        INCREMENT round
    ENDWHILE

    IF playerScore > computerScore THEN
        RETURN "Player Wins!"
    ELSE
        RETURN "Computer Wins!"
```

The main function on the program mainly only calls the playGame function, hence all operations and processes are held by the functions.
