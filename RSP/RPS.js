//get buttons
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

//get span
const userOptionSpan = document.getElementById("user-option");
const computerOptionSpan = document.getElementById("computer-option");
const resultSpan = document.getElementById("result");

//get options
const options = ["Rock", "Paper", "Scissors"];

//assign event listener to buttons
rockBtn.addEventListener("click", function () {
  //userOptionSpan.innerHTML = options[0];
  playGame(options[0]);
});
paperBtn.addEventListener("click", function () {
  //userOptionSpan.innerHTML = options[1];
  playGame(options[1]);
});
scissorsBtn.addEventListener("click", function () {
  //userOptionSpan.innerHTML = options[2];
  playGame(options[2]);
});

//play game function
function playGame(userOption) {
  //set user option

  userOptionSpan.innerHTML = userOption;

  //generate random computer option
  const computerOption = options[Math.floor(Math.random() * options.length)];

  //display computer option
  computerOptionSpan.innerHTML = computerOption;

  //compare options
  //tie

  if (userOption === computerOption) {
    resultSpan.innerHTML = "It's a tie!";
  }
  // rock vs scissors
  else if (userOption === options[0] && computerOption === options[2]) {
    resultSpan.innerHTML = "You win!";
  }
  //paper vs rock
  else if (userOption === options[1] && computerOption === options[0]) {
    resultSpan.innerHTML = "You win!";
  }
  //scissors vs paper
  else if (userOption === options[2] && computerOption === options[1]) {
    resultSpan.innerHTML = "You win!";
  }
  //otherwise
  else {
    resultSpan.innerHTML = "You lose!";
  }
}
