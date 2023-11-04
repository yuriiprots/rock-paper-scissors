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

function getPlayerChoice() {
  let player_choice;

  do {
    player_choice = prompt("Write Rock, paper or scissors").toLowerCase();
  } while (
    player_choice != "rock" &&
    player_choice != "paper" &&
    player_choice != "scissors"
  );

  return player_choice;
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

function game() {
  let play_again = "yes";
  do {
    let round_result;
    let computerSelection;
    let playerSelection;

    let user_score = 0;
    let computer_score = 0;

    while (user_score < 5 && computer_score < 5) {
      computerSelection = getComputerChoice();
      playerSelection = getPlayerChoice();

      round_result = playRound(playerSelection, computerSelection);
      if (round_result == 1) {
        user_score++;
      } else if (round_result == 0) {
        computer_score++;
      }
    }

    console.log(
      "Score: User " + user_score + " :",
      "Computer " + computer_score
    );

    if (user_score > computer_score) {
      console.log("You Won!!!");
    } else if (user_score < computer_score) {
      console.log("You Lost!");
    }

    do {
      play_again = prompt("Play again? Write yes or no").toLowerCase();
    } while (play_again != "yes" && play_again != "no");
  } while (play_again == "yes");
}

console.log(game());
