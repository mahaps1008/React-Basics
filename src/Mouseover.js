
import React,{useState} from 'react'
import './App.css'

function Mouseover() {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };


  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        padding: '20px',
        backgroundColor: isHovered ? 'lightblue' : 'lightgrey',
        cursor: 'pointer',
       position:'absolute',
       margin: '50px',
      }}
    >
      <p>
        Move your mouse over this area to see the background color change!
      </p>
    </div>
  )
}

export default Mouseover;