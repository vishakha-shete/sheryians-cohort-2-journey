import React from 'react'

const But = () => {
        function btnClicked(a) {
            console.log('button is clicked',a);
        }

  return (
    <div>
      <button 
      onClick={function(){
        btnClicked(10)
      }}
       className='bg-emerald-400 active:scale-95 text-xl font-bold  px-4 py-3 rpunded mt-5 ml-5 rounded-2xl'>
        click to submit task</button>
    </div>
  )
}

export default But
