import "./style.css";
import "./tic-tac-toe";
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
        <p>X</p>
        <p class='score-x'></p>
      </div>
      <div class='player-score'>
        <p>O</p>
        <p class='score-o'></p>
      </div>
      <div class='buttons-container '>
        <button class='btn new-game-btn'>New Game</button>
        <button class='btn reset-all-btn'>Reset All</button>
      </div>
    </div>
  </div>
`;
