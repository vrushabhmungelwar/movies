import { useState } from "react";
// import useWindowSize from "react-use/lib/useWindowSize";
// import Confetti from "react-confetti";
import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ReplayIcon from "@mui/icons-material/Replay";
import { GameBox } from "./GameBox";

export function TicTacToe() {
  // const { width, height } = useWindowSize();
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  // useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [isXTurn, setIsXTurn] = useState(true);

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };
  const winner = decideWinner(board);

  const handleClick = (index) => {
    if (winner === null && !board[index]) {
      const boardCopy = [...board];
      boardCopy[index] = !isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
    }
  };
  const history = useHistory();

  return (
    <div className="full-game">
      {/* {winner ? <Confetti width={width} height={height} gravity={0.03} /> : ""} */}
      <div className="board">
        {board.map((val, index) => (
          <GameBox
            key={index}
            val={val}
            onPlayerClick={() => handleClick(index)}
          />
        ))}
      </div>
      {winner ? <h2>Winner is: {winner}</h2> : ""}
      <IconButton onClick={() => history.go(0)}>
        <ReplayIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
