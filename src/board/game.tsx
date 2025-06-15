import { Board } from "./board";
import { useState, useCallback, useMemo } from "react";
export function Game() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [history, setHistory] = useState<string[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? "x" : "o"}`;

  function handleClick(index: number) {
    if (squares[index] || winner) return;

    const nextSquares = squares.slice();
    nextSquares[index] = isXNext ? "x" : "o";
    setSquares(nextSquares);
    setIsXNext(!isXNext);
    setHistory([...history.slice(0, currentMove + 1), nextSquares]);
    setCurrentMove(currentMove + 1);
  }

  const jumpTo = useCallback((squares: string[], move: number) => {
    setSquares(squares);
    setIsXNext(move % 2 === 0);
    setCurrentMove(move);
  }, []);

  const renderHistory = useMemo(() => {
    return history.map((squares, move) => {
      const desc = move ? `Go to move #${move}` : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(squares, move)}>{desc}</button>
        </li>
      );
    });
  }, [history, jumpTo]);

  return (
    <div className="game">
      <div className="game-info">
        <div>{status}</div>
      </div>
      <div className="game-board">
        <Board squares={squares} onClick={handleClick} />
      </div>
      <div className="history_board">
        <ol>{renderHistory}</ol>
      </div>
    </div>
  );
}

const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calculateWinner(squares: string[]) {
  for (let i = 0; i < LINES.length; i++) {
    const [a, b, c] = LINES[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
