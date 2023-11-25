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
}

function paperClickHandler() {
  playRound("paper", getComputerChoice());
  setWeaponInnerHTML(userRoundWeapon, "paper");
}

function scissorsClickHandler() {
  playRound("scissors", getComputerChoice());
  setWeaponInnerHTML(userRoundWeapon, "scissors");
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1 + min));
}

function getComputerChoice() {
  let computerChoice;
  const weapons = ["rock", "paper", "scissors"];
  const randomNumber = randomInteger(0, 2);
  computerChoice = weapons[randomNumber];
  setWeaponInnerHTML(computerRoundWeapon, computerChoice);
  return computerChoice;
}

function setWeaponInnerHTML(element, weapon) {
  element.innerHTML =
    weapon === "rock"
      ? "✊"
      : weapon === "paper"
      ? "✋"
      : weapon === "scissors"
      ? "✌️"
      : "❔";
  return element.innerHTML;
}

function playRound(playerSelection, computerSelection) {
  let roundResult;

  if (playerSelection === computerSelection) {
    headerRoundResult.innerText = "It's a tie!";
    paragraphRoundResult.innerText = `${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } ties with ${computerSelection}`;

    roundResult = "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    headerRoundResult.innerText = "You won!";
    paragraphRoundResult.innerText = `${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${computerSelection}`;
    roundResult = "won";
  } else {
    headerRoundResult.innerText = "You lost!";
    paragraphRoundResult.innerText = `${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } is beaten by ${computerSelection}`;
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
    changeEventListener(true);
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

function changeEventListener(isChanging) {
  btnRock.removeEventListener("click", rockClickHandler);
  btnRock.removeEventListener("click", openPopup);
  const rockHandler = isChanging ? openPopup : rockClickHandler;
  btnRock.addEventListener("click", rockHandler);

  btnPaper.removeEventListener("click", paperClickHandler);
  btnPaper.removeEventListener("click", openPopup);
  const paperHandler = isChanging ? openPopup : paperClickHandler;
  btnPaper.addEventListener("click", paperHandler);

  btnScissors.removeEventListener("click", scissorsClickHandler);
  btnScissors.removeEventListener("click", openPopup);
  const scissorsHandler = isChanging ? openPopup : scissorsClickHandler;
  btnScissors.addEventListener("click", scissorsHandler);
}

overlay.addEventListener("click", overlayClickHandler);

function overlayClickHandler() {
  popup.classList.remove("open-popup");
  overlay.classList.remove("active");
}

function closePopup() {
  headerRoundResult.innerText = "Choose your weapon";
  paragraphRoundResult.innerText = "First to score 5 points wins the game";
  userScore = 0;
  computerScore = 0;

  userScoreNumber.innerHTML = userScore;
  computerScoreNumber.innerHTML = computerScore;

  setWeaponInnerHTML(userRoundWeapon, "sign");
  setWeaponInnerHTML(computerRoundWeapon, "sign");
  overlayClickHandler();
  changeEventListener(false);
}
