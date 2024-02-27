import React, { useState } from 'react';
import './App.css';

function Eventhandling() {
  const [keyPressed, setKeyPressed] = useState('');

  const handleKeyDown = (event) => {
    setKeyPressed(`Key pressed: ${event.key}`);
  };

  return (
    <div>
      <h2>Key Events Example</h2>
      <input
        type="text"
        placeholder="Type something..."
        onKeyDown={handleKeyDown}
      />
      <p>{keyPressed}</p>
    </div>
  );
}

export default Eventhandling;
