import React,{useState}  from 'react'

const App = () => {

  // 1
  const [num, setNum] = useState(0)

  // 2  
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('form submittted');


  }
  return (

    // 1
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num + 1)
      }} >increased</button>
      <div>

      {/* 2 */}
        <form onSubmit={(e)=>{
          submitHandler(e)
          }}>
          <input type="text" placeholder='enter your name' />
          <button>submit</button>
        </form>
      </div>
    </div>
  )
}

export default App
//rewised the topi of usestate in react

