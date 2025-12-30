import React from 'react'

const button = (propse) => {
    console.log(propse.text);
  return (
    <div className='  m-3 bg-amber-300 px-3 py-3 border-2 border-pink-800 w-fit rounded-2xl'> 
         {propse.text}
    </div>
  )
}

export default button
