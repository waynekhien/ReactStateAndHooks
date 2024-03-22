import React from 'react';

function MyComponent() {
  const users = [
    {
      username: 'Jeff',
      online: true
    },
    {
      username: 'Alan',
      online: false
    },
    {
      username: 'Mary',
      online: true
    },
    {
      username: 'Jim',
      online: false
    },
    {
      username: 'Sara',
      online: true
    },
    {
      username: 'Laura',
      online: true
    }
  ];

  const usersOnline = users.filter(user => user.online);

  const renderOnline = usersOnline.map((user, index) => (
    <li key={index}>{user.username}</li>
  ));

  return (
    <div>
      <h1>Current Online Users:</h1>
      <ul>{renderOnline}</ul>
    </div>
  );
}

export default MyComponent;