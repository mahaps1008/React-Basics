import React,{useState} from 'react'


function Onblur() {
  const [isFocused, setIsFocused] = useState(false);


  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div>
    <input
      type="text"
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder="Type something..."
      style={{
        border: isFocused ? '7px solid red' : '6px solid grey',
        padding: '5px',
        alignItems:'center'
      }}
    />
    <p>{isFocused ? 'Input is focused!' : 'Input is not focused.'}</p>
  </div>
  )
}

export default Onblur;