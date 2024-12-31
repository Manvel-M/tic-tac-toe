import "./style.css";
import { ticTacToe } from "./tic-tac-toe";

const boxes = Array(9)
  .fill(null)
  .map((_) => `<div class='box'></div>`);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  
  <div class="game-board">
    <h1 class="message">Start New Game</h1>
    ${boxes.join("")}
    <div class='board-footer'>
      <h2 class='score-title'>SCORE</h2>
      <div class='player-score'>
        <p class='score-x'>0</p>
      </div>
      <div class='player-score'>
        <p class='score-o'>0</p>
      </div>
      <div class='buttons-container '>
        <button class='btn new-game-btn'>New Game</button>
        <button class='btn reset-all-btn'>Reset All</button>
      </div>
    </div>
  </div>
`;

ticTacToe();
