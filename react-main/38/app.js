import React, { useState } from 'react';

const inputStyle = {
  width: 235,
  margin: 5
};

function MagicEightBall() {
  const possibleAnswers = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes, definitely',
    'You may rely on it',
    'As I see it, yes',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    "Don't count on it",
    'My reply is no',
    'My sources say no',
    'Most likely',
    'Outlook not so good',
    'Very doubtful'
  ];

  const [userInput, setUserInput] = useState('');
  const [randomIndex, setRandomIndex] = useState('');

  const ask = () => {
    if (userInput) {
      setRandomIndex(Math.floor(Math.random() * 20));
      setUserInput('');
    }
  };

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const answer = possibleAnswers[randomIndex];

  return (
    <div>
      <input
        type='text'
        value={userInput}
        onChange={handleChange}
        style={inputStyle}
      />
      <br />
      <button onClick={ask}>Ask the Magic Eight Ball!</button>
      <br />
      <h3>Answer:</h3>
      <p>{answer}</p>
    </div>
  );
}

export default MagicEightBall;