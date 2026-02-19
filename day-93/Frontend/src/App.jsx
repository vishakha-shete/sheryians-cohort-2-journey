import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [notes, setNotes] = useState([
  ]) //note name state variable & dummy variable

  function fetchNote() {
    axios.get("http://localhost:3000/app/notes")
      .then((res) => {
        setNotes(res.data.notes);
      })
  }

  useEffect(() => {
    fetchNote()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const { title, description } = e.target.elements

    console.log(title.value, description.value)
    axios.post("http://localhost:3000/app/notes", {
      title: title.value,
      description: description.value
    })
      .then(res => {
        console.log(res.data)

        fetchNote()
      })
  }

  function handleDeleteNote(noteId) {
    axios.delete("http://localhost:3000/app/notes/" + noteId)
      .then(res => {
        console.log(res.data);
        fetchNote()
      })
  }

  return (
    <>
      <form className='note-create-form' onSubmit={handleSubmit}>
        <input name='title' type="text" placeholder='Enter Title' />
        <input name='description' type="text" placeholder='Enter Description' />
        <button>Creat-Note</button>
      </form>

      <div className='notes'>
        {
          notes.map(note => {
            return <div className='note'>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={() => { handleDeleteNote(note._id) }}>delete</button>
            </div>
          })
        }
      </div>
    </>
  )
}
export default App
