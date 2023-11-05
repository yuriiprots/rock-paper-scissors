function getComputerChoice() {
  let computer_choice;

  // Expected output: 1, 2 or 3
  const number = Math.floor(1 + Math.random() * 3);

  if (number === 1) {
    computer_choice = "rock";
  } else if (number === 2) {
    computer_choice = "paper";
  } else {
    computer_choice = "scissors";
  }
  return computer_choice;
}

function getPlayerChoice() {
  let player_choice;

  while (
    player_choice != "rock" &&
    player_choice != "paper" &&
    player_choice != "scissors"
  ) {
    player_choice = prompt("Write Rock, paper or scissors").toLowerCase();
  }

  return player_choice;
}

function playRound(playerSelection, computerSelection) {
  let result = 0;

  if (playerSelection === computerSelection) {
    console.log(
      "It's a tie! " + playerSelection + " ties with " + computerSelection
    );
    result = "tie"
  }
  
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    console.log("You Won! " + playerSelection + " beats " + computerSelection);
    result = "won";
  }
  
  else {
    console.log(
      "You Lost! " + playerSelection + " is beaten by " + computerSelection
    );
    result = "lost";
  }
  return result;
}

function game() {
  let play_again = true;

  while (play_again === true) {
    let round_result;
    let computerSelection;
    let playerSelection;

    let user_score = 0;
    let computer_score = 0;

    while (user_score < 5 && computer_score < 5) {
      computerSelection = getComputerChoice();
      playerSelection = getPlayerChoice();

      round_result = playRound(playerSelection, computerSelection);
      console.log(round_result);
      if (round_result === "won") {
        user_score++;
      } else if (round_result === "lost") {
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
    play_again = confirm("Play again?");
  }
}

console.log(game());
