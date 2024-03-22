import React, { useState } from 'react';

function StatefulComponent() {
  const [firstName, setFirstName] = useState('Your Name');

  return (
    <div>
      <h1>{firstName}</h1>
    </div>
  );
}