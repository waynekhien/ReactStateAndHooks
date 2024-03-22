import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 13) {
        handleEnter();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleEnter = () => {
    setMessage((prevMessage) => prevMessage + 'You pressed the enter key! ');
  };

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default MyComponent;