import React from 'react'
import { useState } from 'react';


const App = () => {


  // 1
  const [king, setking] = useState('sarthak')
  const [queen, setqueen] = useState('shreyaa')

  // 2  
  const [num, setnum] = useState(10)

  // 3
  const [but, setbut] = useState(0)

  // 4  
  const arr = ['vishakha', 'prashita', 'vaishnavi', 'pranali']
  const [name, setname] = useState(0)

  // 5
  const [marks, setMarks] = useState([60,30,50,70,89,90])
  function graceStudent() {
    const newMarks = marks.map(function(elem){
    if(elem>95){
      return elem
    }else{
      return elem + 5
    }
    })
  setMarks(newMarks)
  }



  const changeking = () => {
    setking('vaishnavi')

  }
  const changequeen = () => {
    setqueen('rohini')
  }
  return (

// 1
    <div>
      <h1>{king} X {queen}</h1>
      <button onClick={changeking}>chage king</button>
      <button onClick={changequeen}>chage queen</button>


{/* 2 */}
      <div>
        <h1>{num}</h1>
        <button onClick={() => {
          setnum(num + 1)
        }}>increased</button>
        <button onClick={() => {
          setnum(num - 1)
        }} >decrease</button>
        <button onClick={() => {
          setnum(num + 5)
        }}>jump by 5</button>
      </div>


{/* 3 */}
      <div >
        <div className='box'>
          <h1>{but}</h1>
        </div>
        <button onClick={() => {
          const rdm = Math.floor(Math.random() * 100)
          setbut(rdm)
        }}>click me</button>
      </div>


{/* 4 */}
      <div >
        <div className='box'>

          <h1>{arr[name]}</h1>
        </div>
        <button onClick={() => {
          if (name < arr.length - 1) {
            setname(name + 1)
          }
        }}>change name</button>
      </div>

{/* 5 */}

       <div  >
        {marks.map(function(elem,idx){
          return <h1 key ={idx}> studdent {idx+1} = {elem}  : {elem>33? 'pass' : 'faill'}</h1>
        })}
        <button onClick={graceStudent}>Give them grace </button>
       </div>


    </div>


  )
}

export default App
