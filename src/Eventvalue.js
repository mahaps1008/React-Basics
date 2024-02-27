import React,{useState} from 'react'


function Eventvalue() {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>Type something:</label>
      <input
        type="text"
        id="exampleInput"
        value={inputValue}
        onChange={handleChange}
      />
      <p>You typed: {inputValue}</p>
    </div>
  )
}

export default Eventvalue;