import React from 'react'

const Mart = (drops) => {
    console.log(drops);
  return (
    <div className='bg-pink-300 border-2 border-blue-900 m-2 py-5 h-70 rounded-2xl w-60 flex justify-center '>
      <h1 className='font-bold text-4xl'>{drops.user}</h1>
    </div>
  )
}

export default Mart
