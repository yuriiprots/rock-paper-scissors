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
