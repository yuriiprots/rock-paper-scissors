function getComputerChoice() {
  // Expected output: 0, 1 or 2
  let number = Math.floor(Math.random() * 3);

  if (number == 0) {
    computer_choice = "rock";
  } else if (number == 1) {
    computer_choice = "paper";
  } else {
    computer_choice = "scissors";
  }
  return computer_choice;
}

function playRound(playerSelection, computerSelection) {
  let result;

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    console.log("You Won! " + playerSelection + " beats " + computerSelection);
    result = 1;
  }
  if (
    (playerSelection == "rock" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "paper")
  ) {
    console.log(
      "It's a tie! " + playerSelection + " ties with " + computerSelection
    );
  }
  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissors")
  ) {
    console.log(
      "You Lost! " + playerSelection + " is beaten by " + computerSelection
    );
    result = 0;
  }
  return result;
}
