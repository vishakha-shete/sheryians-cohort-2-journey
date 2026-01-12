import React,{useState}  from 'react'

const App = () => {

  // 1
  const [num, setNum] = useState(0)

  // 2  
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(username,email);
    const oldusers = [...allusers]
    oldusers.push({username,email})
    sealltusers(oldusers)    
    console.log(oldusers);
    setUsername('')
    setemail('')
  }

  const [username, setUsername ] = useState('')
  const [allusers, sealltusers] = useState(['vish'])
  const [email, setemail] = useState('')
   
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
          <input type="text" placeholder='enter email'
                    value={email} 
                    required 
                    onChange={(e)=>{
                      setemail(e.target.value);
                    }}
          />          
          <button>submit</button>
        </form>

        {allusers.map(function(elem,idx){
          return <div key={idx}>
          <h4 key={elem.idx} >
            {elem.username}</h4>
            <p>{elem.email}</p>
          </div>
        })}
      </div>
    </div>


  )
}

export default App
//rewised the topi of usestate in react

