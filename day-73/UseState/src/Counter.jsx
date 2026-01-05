import React from 'react'

const Counter = () => {


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        setNum (num+1)
      }}>change it</button>
    </div>
  )
}

export default Counter
