// calculate the score of the User and Computer
let userScore = 0;
let compScore = 0;

// modular way of programming --> means to perform one task in one function

// acquire the all the things from the HTML into JS
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Automatically generate the value from the computer-side
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3); // no. from 0 to 2
  return options[randIdx];
};

// Draw Game
const drawGame = () => {
  msg.innerText = "Game was Draw, Play Again";
  msg.style.backgroundColor = "#0ACDFF";
};

// It will decide the winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You loose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Game rule and playing rules
const playGame = (userChoice) => {
  // generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// when choose the any choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("Choice was clicked", userChoice);
    playGame(userChoice);
  });
});
