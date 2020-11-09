import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const TIME = 5
  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(TIME)
  const [isGameOn, setIsGameOn] = useState(false)

  const textRef = useRef(null)

  function handleChange(event) {
    const { value } = event.target
    setText(value)
  }

  function startGame() {
    setIsGameOn(true)
    setTimeRemaining(TIME)
    setText('')
    textRef.current.disabled = false
    textRef.current.focus()
  }

  useEffect(() => {
    if (timeRemaining > 0 && isGameOn) {
      setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000)
    }
    else {
      setIsGameOn(false)
    }
  }, [timeRemaining, isGameOn])

  const wordCount = text.trim().split(" ")
    .filter(item => item !== "")
    .length


  return (
    <div >

      <h1>How fast can you type? </h1>

      <textarea ref={textRef}
        disabled={!isGameOn}
        onChange={handleChange}
        value={text}
      />

      <h1>Time Remaining:{timeRemaining} </h1>

      <button disabled={isGameOn} onClick={() => startGame()}>Start Game</button>

      <h1>Word Count:{!isGameOn && wordCount} </h1>

    </div>
  );
}

export default App;
