import React from 'react';

function MyApp() {
  const name = 'CamperBot';

  return (
    <div>
      {/* Pass the name property to the Navbar component */}
      <Navbar name={name} />
    </div>
  );
}

function Navbar(props) {
  return (
    <div>
      {/* Display the name received from props */}
      <h1>Hello, my name is: {props.name}</h1>
    </div>
  );
}

export default MyApp;