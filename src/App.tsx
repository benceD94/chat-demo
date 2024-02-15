import React from 'react';
import { makeServer } from "./mirage";

makeServer({ environment: 'development' });

function App() {
  return (
    <p>Hello World!</p>
  );
}

export default App;
