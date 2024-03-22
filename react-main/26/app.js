import React, { useState } from 'react';

function MyComponent() {
  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(prevVisibility => !prevVisibility);
  };

  if (visibility) {
    return (
      <div>
        <button onClick={toggleVisibility}>Click Me</button>
        <h1>Now you see me!</h1>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={toggleVisibility}>Click Me</button>
      </div>
    );
  }
}