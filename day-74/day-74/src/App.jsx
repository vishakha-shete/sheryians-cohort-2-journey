import React,{useState}  from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num + 1)
      }} >increased</button>
    </div>
  )
}

export default App
//rewised the topi of usestate in react

