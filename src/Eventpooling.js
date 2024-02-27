import React from 'react';

function Eventpooling() {
  const handleClick = (event) => {
    prompt('Button clicked! Event type:', event.type);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Eventpooling;
