import React, { useState } from 'react';

function MyComponent() {
  const [text, setText] = useState('Hello');

  const handleClick = () => {
    setText('You clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <h1>{text}</h1>
    </div>
  );
}