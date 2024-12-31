export function ticTacToe() {
  const boardMessage = document.querySelector(".message") as HTMLHeadingElement;
  const boxes = document.querySelectorAll(".box") as NodeListOf<HTMLDivElement>;
  const scoreX = document.querySelector(".score-x") as HTMLParagraphElement;
  const scoreO = document.querySelector(".score-o") as HTMLParagraphElement;
  const overlay = document.querySelector(".overlay") as HTMLDivElement;
  const btnsContainer = document.querySelector(
    ".buttons-container"
  ) as HTMLDivElement;
  const newGameButton = document.querySelector(
    ".new-game-btn"
  ) as HTMLButtonElement;
  const resetAllButton = document.querySelector(
    ".reset-all-btn"
  ) as HTMLButtonElement;

  let playerTurn = "";
  let winner = "";
  let playerMoves = Array(9).fill("");
  let gameScores = { x: 0, o: 0 };
  const winningPaths = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [6, 4, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  function newGame() {
    playerTurn = Math.floor(Math.random() * 2) === 0 ? "X" : "O";
    overlay.classList.add("hide");
    btnsContainer.classList.add("hide");
    clearBoard();
    announceBoard();
  }
  function resetAll() {
    scoreO.innerHTML = "0";
    scoreX.innerHTML = "0";
    gameScores = { x: 0, o: 0 };
    boardMessage.innerHTML = "Start New Game";
    clearBoard();
  }

  function clearBoard() {
    playerMoves = Array(9).fill("");
    winner = "";
    boxes.forEach((box) => {
      box.innerHTML = "";
      box.classList.remove("winner", "x", "o");
    });
  }

  function announceBoard() {
    if (!winner) {
      boardMessage.innerHTML = `${playerTurn} Turn`;
    } else if (winner) {
      boardMessage.innerHTML = winner;
    }
  }

  function playerMove(box: HTMLElement, id: number) {
    if (winner || playerMoves[id] !== "" || !playerTurn) return;
    playerMoves[id] = playerTurn;
    box.innerHTML = playerTurn;
    box.classList.add(playerTurn.toLowerCase());

    checkWinner();
    if (winner) return;
    if (!playerMoves.includes("")) {
      winner = "Draw";
      removeClasses();
      announceBoard();
      return;
    }
    playerTurn = playerTurn === "X" ? "O" : "X";
    announceBoard();
  }

  function removeClasses() {
    overlay.classList.remove("hide");
    btnsContainer.classList.remove("hide");
  }

  function checkWinner() {
    for (let i = 0; i < winningPaths.length; i++) {
      const [a, b, c] = winningPaths[i];
      if (
        playerMoves[a] !== "" &&
        playerMoves[a] === playerMoves[b] &&
        playerMoves[a] === playerMoves[c]
      ) {
        winner = `${playerMoves[a]} Wins`;
        if (playerMoves[a] === "X") {
          gameScores.x++;
          scoreX.innerHTML = gameScores.x.toString();
        } else {
          gameScores.o++;
          scoreO.innerHTML = gameScores.o.toString();
        }
        removeClasses();
        announceBoard();
        return;
      }
    }
    return null;
  }

  boxes.forEach((box, idx) => {
    box.addEventListener("click", () => playerMove(box, idx));
  });
  newGameButton?.addEventListener("click", newGame);
  resetAllButton?.addEventListener("click", resetAll);
}
