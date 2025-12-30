import React from 'react'
import Mart from "./assets/Components/Mart.jsx";
import Button from "./assets/Components/button.jsx";



const App = () => {
  const users = ['vaishnavi','sarthal','raunik','sinik','dhneshwar']
  return (
    <div className='p-10 flex flex-wrap bg-sky-300' >
      {users.map(function(elem){
        return <Mart user={elem}/>
      })}
      <Button text='Buy Nowwwww' />
      <Button text='explore Nowwwww' />
      <Button text='Shift Nowwwww' />
      <Button text='Song Play Nowwwww' />

    </div>
  )
}

export default App
