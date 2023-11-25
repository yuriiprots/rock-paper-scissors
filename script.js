const btnRock = document.querySelector("#btn_rock");
const btnPaper = document.querySelector("#btn_paper");
const btnScissors = document.querySelector("#btn_scissors");

const headerRoundResult = document.querySelector("#header_round_result");
const paragraphRoundResult = document.querySelector("#paragraph_round_result");
const userRoundWeapon = document.querySelector("#user_round_weapon");
const computerRoundWeapon = document.querySelector("#computer_round_weapon");
const userScoreNumber = document.querySelector("#user_score_number");
const computerScoreNumber = document.querySelector("#computer_score_number");

const popup = document.querySelector("#popup");
const btnPopup = document.querySelector("#popup_btn");
const overlay = document.querySelector("#overlay");

const popupGameResult = document.querySelector("#popup_game_result");

let userScore = 0;
let computerScore = 0;

btnRock.addEventListener("click", rockClickHandler);
btnPaper.addEventListener("click", paperClickHandler);
btnScissors.addEventListener("click", scissorsClickHandler);
btnPopup.addEventListener("click", closePopup);

function rockClickHandler() {
  playRound("rock", getComputerChoice());
  setWeaponInnerHTML(userRoundWeapon, "rock");
  userRoundWeapon.innerHTML = "✊";
}

function paperClickHandler() {
  playRound("paper", getComputerChoice());
  setWeaponInnerHTML(userRoundWeapon, "paper");
  userRoundWeapon.innerHTML = "✋";
}

function scissorsClickHandler() {
  playRound("scissors", getComputerChoice());
  userRoundWeapon.innerHTML = "✌️";
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1 + min));
}

function getComputerChoice() {
  let computerChoice;
  const randomNumber = randomInteger(1, 3);

  if (randomNumber === 1) {
    computerChoice = "rock";
    computerRoundWeapon.innerHTML = "✊";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
    computerRoundWeapon.innerHTML = "✋";
  } else {
    computerChoice = "scissors";
    computerRoundWeapon.innerHTML = "✌️";
  }
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let roundResult;

  if (playerSelection === computerSelection) {
    headerRoundResult.innerText = "It's a tie!";
    paragraphRoundResult.innerText =
      playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1) +
      " ties with " +
      computerSelection;

    roundResult = "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    headerRoundResult.innerText = "You won!";
    paragraphRoundResult.innerText =
      playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1) +
      " beats " +
      computerSelection;
    roundResult = "won";
  } else {
    headerRoundResult.innerText = "You lost!";
    paragraphRoundResult.innerText =
      playerSelection.charAt(0).toUpperCase() +
      playerSelection.slice(1) +
      " is beaten by " +
      computerSelection;
    roundResult = "lost";
  }
  updateScore(roundResult);
}

function updateScore(roundResult) {
  if (roundResult === "won") {
    userScore++;
    userScoreNumber.innerHTML = userScore;
  } else if (roundResult === "lost") {
    computerScore++;
    computerScoreNumber.innerHTML = computerScore;
  }
  checkWinner(userScore, computerScore);
}

function checkWinner(userScore, computerScore) {
  if (userScore >= 5 || computerScore >= 5) {
    openPopup();

    btnRock.removeEventListener("click", rockClickHandler);
    btnRock.addEventListener("click", openPopup);

    btnPaper.removeEventListener("click", paperClickHandler);
    btnPaper.addEventListener("click", openPopup);

    btnScissors.removeEventListener("click", scissorsClickHandler);
    btnScissors.addEventListener("click", openPopup);
  }
}

function openPopup() {
  popup.classList.add("open-popup");
  overlay.classList.add("active");

  if (userScore >= 5) {
    popupGameResult.innerHTML = "You won!";
  } else if (computerScore >= 5) {
    popupGameResult.innerHTML = "You lost...";
  }
}

overlay.addEventListener("click", () => {
  popup.classList.remove("open-popup");
  overlay.classList.remove("active");
});

function closePopup() {
  headerRoundResult.innerText = "Choose your weapon";
  paragraphRoundResult.innerText = "First to score 5 points wins the game";
  userRoundWeapon.innerHTML = "❔";
  computerRoundWeapon.innerHTML = "❔";

  popup.classList.remove("open-popup");
  overlay.classList.remove("active");

  userScore = 0;
  userScoreNumber.innerHTML = userScore;

  computerScore = 0;
  computerScoreNumber.innerHTML = computerScore;

  btnRock.removeEventListener("click", openPopup);
  btnPaper.removeEventListener("click", openPopup);
  btnScissors.removeEventListener("click", openPopup);

  btnRock.addEventListener("click", rockClickHandler);
  btnPaper.addEventListener("click", paperClickHandler);
  btnScissors.addEventListener("click", scissorsClickHandler);
}
