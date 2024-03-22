import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log('Component is about to mount');
    
    return () => {
      console.log('Component is unmounting');
    };
  }, []);

  return <div />;
}

export default MyComponent;