import React,{useState}  from 'react'

const App = () => {

  // 1
  const [num, setNum] = useState(0)

  // 2  
  const submitHandler = (e)=>{
    e.preventDefault()
    const oldusers = [...allusers]
    oldusers.push(username)
    sealltusers(oldusers)    
    console.log(oldusers);
    setUsername('')
  }

  const [username, setUsername ] = useState('')
  const [allusers, sealltusers] = useState(['vish'])
   
  return (

    // 1
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
        setNum(num + 1)
      }} >increased</button>


    {/* 2 */}
      <div>
        <form onSubmit={(e)=>{
          submitHandler(e)
          }}>
          <input type="text" placeholder='enter your name'
                    value={username} 
                    required 
                    onChange={(e)=>{
                      setUsername(e.target.value);
                    }}
          />
          <button>submit</button>
        </form>

        {allusers.map(function(elem,idx){
          return <h4 key={idx} >{elem}</h4>

        })}
      </div>
    </div>


  )
}

export default App
//rewised the topi of usestate in react

