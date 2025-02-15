import { useState } from "react";
import PropTypes from "prop-types";
import "./index.css";

// Square Component (Single Cell)
function Square({ value, onClick }) { 
  return (
    <button
      className="w-16 h-16 text-2xl font-bold flex items-center justify-center border border-gray-400 hover:bg-gray-200"
      onClick={onClick}
    >
      {value}
    </button>
  );
}
Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Square.defaultProps = {
  value: null,
};

// Board Component (Dynamic Grid)
// Board Component (Dynamic Grid)
function Board({ size }) {
  const [squares, setSquares] = useState(Array(size * size).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares, size)) return;
    
    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(squares, size);
  const status = winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="text-center">
      <h2 className="text-lg font-bold mb-2">{status}</h2>
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
        {squares.map((square, index) => (
          <Square key={index} value={square} onClick={() => handleClick(index)} />
        ))}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => setSquares(Array(size * size).fill(null))}
      >
        Restart Game
      </button>
    </div>
  );
}

// Winning Logic for Dynamic Grid
function calculateWinner(squares, size) {
  const lines = [];
  
  // Rows & Columns
  for (let i = 0; i < size; i++) {
    lines.push([...Array(size)].map((_, j) => i * size + j)); // Row
    lines.push([...Array(size)].map((_, j) => j * size + i)); // Column
  }

  // Diagonals
  lines.push([...Array(size)].map((_, i) => i * (size + 1))); // Top-left to bottom-right
  lines.push([...Array(size)].map((_, i) => (i + 1) * (size - 1))); // Top-right to bottom-left
Board.propTypes = {
  size: PropTypes.number.isRequired,
};

// App Component (Parent Component)
  for (const line of lines) {
    const [a, ...rest] = line;
    if (squares[a] && rest.every((index) => squares[index] === squares[a])) {
      return squares[a];
    }
  }
  return null;
}

// App Component (Parent Component)
export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Tic-Tac-Toe</h1>
      <Board size={4} />
    </div>
  );
}
