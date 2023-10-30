import React, { useState } from "react";

import Square from "./components/Square";

import "./App.css";

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ]);

  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [bombLocation, setvBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  const handleSquareClick = (clickedSquareIndex) => {
    //variable holding copy of current state
    let updatedBoard = [...board];
    // set condition for if treasure location is same as clicked squares index show a treasure
    if (clickedSquareIndex === treasureLocation) {
      // then reassign state value at that index to treasure emoji
      updatedBoard[clickedSquareIndex] = "💎";
      // setBoard(updatedBoard)
    } else if (clickedSquareIndex === bombLocation) {
      updatedBoard[clickedSquareIndex] = "💣";
      // setBoard(updatedBoard)
    } else {
      // use index from clickedSquareIndex to update the clicked Square value with emoji using the bracket notion
      updatedBoard[clickedSquareIndex] = "🌲";
      // update state with new board
    }
    setBoard(updatedBoard);
  };

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
        {board.map((value, index) => {
          return (
            <Square
              value={value}
              index={index}
              handleSquareClick={handleSquareClick}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
