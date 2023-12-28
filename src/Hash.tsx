import React, { useState } from 'react';
import { Container, Board, Cell } from './Components/ComponentsStyled'
import { FaTimes, FaCircle } from 'react-icons/fa';
import { Colors } from './Components/ColorComponent';


const Hash: React.FC = () => {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (index: number) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';

    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderCell = (index: number) => {
    const bgColor = board[index] ? `${Colors.Block}` : `${Colors.Background}`;
    const fgColor = board[index] === 'X' ? `${Colors.FaTimes}` : `${Colors.FaCircle}`;

    return (
      <Cell key={index} bgColor={bgColor} fgColor={fgColor} onClick={() => handleClick(index)}>
        {board[index] === 'X' ? <FaTimes /> : board[index] === 'O' ? <FaCircle /> : null}
      </Cell>
    );
  };

  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <Container>
      <h2>{status}</h2>
      <Board>{Array.from({ length: 9 }, (_, index) => renderCell(index))}</Board>
    </Container>
  );
};

const calculateWinner = (squares: Array<string | null>): string | null => {
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

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default Hash;
