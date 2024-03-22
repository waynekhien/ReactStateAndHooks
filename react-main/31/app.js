import React, { useState } from 'react';

function MyApp() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {/* Add GetInput component and pass inputValue and handleChange as props */}
      <GetInput input={inputValue} handleChange={handleChange} />

      {/* Add RenderInput component and pass inputValue as a prop */}
      <RenderInput input={inputValue} />
    </div>
  );
}

function GetInput(props) {
  return (
    <div>
      <h3>Get Input:</h3>
      <input
        value={props.input}
        onChange={props.handleChange}
      />
    </div>
  );
}

function RenderInput(props) {
  return (
    <div>
      <h3>Input Render:</h3>
      <p>{props.input}</p>
    </div>
  );
}

export default MyApp;