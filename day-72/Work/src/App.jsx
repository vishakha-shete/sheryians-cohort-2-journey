import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Men from './Components/Men.jsx'
import Women from './Components/Women.jsx'
import But from './Components/But.jsx'
const App = () => {
 
  const user1 ={
    name:'Bixi',
    age:30,
    gender:'male',
  }
  const user2 ={
    name:'shreya',
    age:30,
    gender:'female',
  }
  const user3 ={
    name:'Harshit',
    age:8,
    gender:'male',
  }

  return (
    <div className='py-5 bg-black '>
      <h1 className='text-7xl text-white' >hello</h1>
      <Navbar title='vishakha' color='violet' links={['home','About','Account','Contact']} />
      <Navbar title='vaishnavi' color='pink' links={['home','Services','Cources','Contact']} />
      <Navbar title='Tanvi' color='brown' links={['home','Product','Men','Women']} />
   {user1.gender=='male'? user1.age > 10 ? <Men /> :<Women />:<Women />}

   <But />
    </div>
  )
}

export default App
