import React from 'react';
import { renderToString } from 'react-dom/server';

function App() {
  return <div />;
}

// Change code below this line
const appString = renderToString(<App />);