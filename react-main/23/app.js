import React, { useState } from 'react';

function MyComponent() {
  const [name, setName] = useState('freeCodeCamp');

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}