// Board.tsx
import { Square } from "./square";

type BoardProps = {
  squares: string[];
  onClick: (i: number) => void;
}

export function Board({ squares, onClick }: BoardProps) {
  function renderSquare(index: number) {
    return (
      <Square
        key={index}
        value={squares[index]}
        onSquareClick={() => onClick(index)}
      />
    );
  }

  return (
    <div className="board">
      {[0, 1, 2].map((row) => (
        <div className="board-row" key={row}>
          {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
        </div>
      ))}
    </div>
  );
}