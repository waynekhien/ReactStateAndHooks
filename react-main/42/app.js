import React, { useState } from 'react';

function Results({ fiftyFifty }) {
  return <h1>{fiftyFifty ? 'You Win!' : 'You Lose!'}</h1>;
}

function GameOfChance() {
  const [counter, setCounter] = useState(1);

  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const expression = Math.random() >= 0.5; // Randomized expression

  return (
    <div>
      <button onClick={handleClick}>Play Again</button>
      <Results fiftyFifty={expression} />
      <p>{'Turn: ' + counter}</p>
    </div>
  );
}

export default GameOfChance;