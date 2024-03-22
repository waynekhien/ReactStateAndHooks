import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [activeUsers, setActiveUsers] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveUsers(1273);
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <h1>Active Users: {activeUsers}</h1>
    </div>
  );
}

export default MyComponent;