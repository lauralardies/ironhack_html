// Diferentes opciones 
let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

// Elección de los jugadores
let firstPlayerChoice = prompt ("Enter the choice for Player 1:");
let secondPlayerChoice = prompt ("Enter the choice for Player 2:");

// Definimos las diferentes posibilidades 
let firstPossibility = firstPlayerChoice === paper && secondPlayerChoice === rock;
let secondPossibility = firstPlayerChoice === paper && secondPlayerChoice === scissors;
let thirdPossibility = firstPlayerChoice === rock && secondPlayerChoice === paper;
let fourthPossibility = firstPlayerChoice === rock && secondPlayerChoice === scissors;
let fifthPossibility = firstPlayerChoice === scissors && secondPlayerChoice === rock;
let sixthPossibility = firstPlayerChoice === scissors && secondPlayerChoice === paper; 
let seventhPossibility = firstPlayerChoice === secondPlayerChoice; // Los dos jugadores tienen la misma opción

switch (true) {
  case firstPossibility:
  case fourthPossibility:
  case sixthPossibility:
    console.log("Player 1 won!");
    break;
  case secondPossibility:
  case thirdPossibility:
  case fifthPossibility:
    console.log("Player 2 won!");
    break;
  case seventhPossibility:
    console.log("It was a tie!");
    break;
  default:
    console.log("Something went wrong...");
    break;
}