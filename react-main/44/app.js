import React, { useState } from 'react';

const textAreaStyles = {
  width: 235,
  margin: 5
};

function MyToDoList() {
  const [userInput, setUserInput] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const handleSubmit = () => {
    const itemsArray = userInput.split(',');
    setToDoList(itemsArray);
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const items = toDoList.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  return (
    <div>
      <textarea
        onChange={handleChange}
        value={userInput}
        style={textAreaStyles}
        placeholder='Separate Items With Commas'
      />
      <br />
      <button onClick={handleSubmit}>Create List</button>
      <h1>My "To Do" List:</h1>
      <ul>{items}</ul>
    </div>
  );
}

export default MyToDoList;