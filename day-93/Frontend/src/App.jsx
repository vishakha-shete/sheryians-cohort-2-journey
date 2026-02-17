import { useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [notes, setNotes] = useState([
    {
      title: "Test-Title",
      description: "Test description-1"
    },
    {
      title: "Test-Title",
      description: "Test description-2"
    },
    {
      title: "Test-Title",
      description: "Test description-3"
    },
    {
      title: "Test-Title",
      description: "Test description-4"
    },
  ])

  axios.get("http://localhost:3000/app/notes")
  .then((res)=>{
    setNotes(res.data.notes);
  })

  return (
    <>
      <div className='notes'>
        {
          notes.map(note => {
          return <div className='note'>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
          })
        }

      </div>
    </>
  )
}

export default App
