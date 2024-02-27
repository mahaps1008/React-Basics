import React from 'react';


function Handleclick() {
  const handleClick = () => {
    prompt('Button clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Handleclick;
