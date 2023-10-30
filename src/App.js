import React, { useState } from "react"

import Square from "./components/Square"

import "./App.css"

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
    "?"
  ])

  const handleSquareClick = (clickedSquareIndex) => {
    //variable holding copy of current state
    let updatedBoard = [...board]
   // use index to update the current Square's value with emoji
   updatedBoard[clickedSquareIndex] = "🌲"
   setBoard(updatedBoard)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className = "board">
      {board.map((value, index) => {
     return (
     <Square 
     value={value} 
     index ={index} 
     handleSquareClick={handleSquareClick} 
     />
     )
    })}

   </div>
    </>
  )
}

export default App
