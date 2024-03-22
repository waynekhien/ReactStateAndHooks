import React, { useState, useEffect } from 'react';

function OnlyEvens({ value }) {
  useEffect(() => {
    console.log('Should I update?');
  }, [value]);

  useEffect(() => {
    console.log('Component re-rendered.');
  });

  return <h1>{value}</h1>;
}

function Controller() {
  const [value, setValue] = useState(0);

  const addValue = () => {
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <div>
      <button onClick={addValue}>Add</button>
      <OnlyEvens value={value} />
    </div>
  );
}

export default Controller;