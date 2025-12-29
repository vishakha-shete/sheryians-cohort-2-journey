import React from 'react'

const card = () => {
    const age = 22
    const user = 'Vishakha'
    const arr = [1,2,3,4,4,5]
  return (
    <div>
      <h3 className='font-bold bg-sky-300'>i think this year is going to the best year of my life</h3>
      <h1>{age},{user}</h1> 
      <h1 className='font-bold bg-pink-900'>{user}</h1>
      {arr.map(function(elem){
        return <h1>{elem} is our choise</h1>
      })}
    </div>
  )
}

export default card
