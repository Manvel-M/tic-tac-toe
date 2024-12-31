const boardMessage = document.querySelector(".message");
const boxes = document.querySelectorAll(".box");
const scoreX = document.querySelector(".score-x");
const scoreO = document.querySelector(".score-o");
const newGameButton = document.querySelector(".new-game-btn");
const resetAllButton = document.querySelector(".reset-all-btn");

function newGame() {
  console.log("New Game");
}
function resetAll() {
  console.log("Reset All");
}

newGameButton?.addEventListener("click", newGame);
resetAllButton?.addEventListener("click", resetAll);
