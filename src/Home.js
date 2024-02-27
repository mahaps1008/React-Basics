import React, { useState } from 'react'

const Home=()=> {
    const [count,setcount]=useState(0)
    const increment=()=>{
      setcount(count+1)
    }
    const decrement=()=>{
        setcount(count-1)
    }
  return (
    <div>
<h1>count:{count}</h1>
<button onClick={increment}>Increase</button>
<button onClick={decrement}>Decrease</button>
        
    </div>
  )
}

export default Home