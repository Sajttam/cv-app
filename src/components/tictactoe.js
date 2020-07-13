import React from 'react';
import './tictactoe.css';

//npm start



function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Board extends React.Component {

  renderSquare(i) {
    return <Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function isMovesLeft(board) {
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      return true;
    }
  }
  return false;
}

function minimax(board, depth, isMaximizingPlayer) {
  const winner = calculateWinner(board);
  if (winner === 'X') {
    return -10 + depth;
  }

  if (winner === 'O') {
    return 10 - depth;
  }

  if (!isMovesLeft(board)) {
    return 0;
  }

  let bestVal;
  if (isMaximizingPlayer) {
    bestVal = Number.NEGATIVE_INFINITY;
    board.map((mark, n) => {
      if (!mark) {
        board[n] = 'O';
        const value = minimax(board, depth + 1, false);
        bestVal = Math.max(bestVal, value);
        board[n] = null;
      }
    })
  }
  else {
    bestVal = Number.POSITIVE_INFINITY;
    board.map((mark, n) => {
      if (!mark) {
        board[n] = 'X';
        const value = minimax(board, depth + 1, true);
        bestVal = Math.min(bestVal, value);
        board[n] = null;
      }
    })
  }
  return bestVal;
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        targetPos: null,
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleMove(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        targetPos: i,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    //Do player move
    squares[i] = 'X';

    //Find opponents best move
    if (isMovesLeft(squares) && !calculateWinner(squares)) {
      let bestMove = 0;
      while (squares[bestMove]) bestMove++;
      let bestMoveValue = Number.NEGATIVE_INFINITY;
      for (let j = 0; j < squares.length; j++) {
        if (!squares[j]) {
          squares[j] = 'O';
          const value = minimax(squares, 0, false);
          console.log('move: ' + j + ', value: ' + value);
          if (value > bestMoveValue) {
            bestMove = j;
            bestMoveValue = value;
          }
          squares[j] = null;
        }
      }
      //Do opponents best move
      squares[bestMove] = 'O';
    }

    //Set moves
    this.setState({
      history: history.concat([{
        squares: squares,
        targetPos: i,
      }]),
      stepNumber: history.length,
      xIsNext: true,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const row = Math.floor(step.targetPos / 3) + 1;
      const col = step.targetPos % 3 + 1;
      const desc = move ?
        'Go to move #' + move + ' (' + col + ',' + row + ')' :
        'Go to game start';

      const element = (move === this.state.stepNumber) ?
        <b>{desc}</b> : desc;

      return (
        <li key={move}>
          <button className="historyButton" onClick={() => this.jumpTo(move)}>{element}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

export default Game;

/*
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);*/