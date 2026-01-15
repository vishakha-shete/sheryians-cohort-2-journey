import React from 'react'
import Card from './components/card.jsx'

const App = () => {

  const cardData={
    username : 'Anushreeee',
    role : 'Engineer',
    email : 'anu@gmail.com',
    profile : 'https://i.pinimg.com/736x/c0/16/59/c016595ecd4c36cdd5f46b5afb779950.jpg'
  }

  const cardData1={
    username : 'Saksheee',
    role : 'Developer',
    email : 'Sack@gmail.com',
    profile : 'https://i.pinimg.com/1200x/d0/38/c9/d038c96d987d450eb1f49b6938585824.jpg'
  }

  return (
      <>
       < Card cardData={cardData} />
       < Card cardData={cardData1} />

       
      </>

      // <></> -this is fragemnents
  )
}

export default App
