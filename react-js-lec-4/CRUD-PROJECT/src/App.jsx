import React, { useEffect, useState } from 'react'
import Card from './component/Card'


const App = () => {

  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')

  const [postdata, setpostdata] = useState(JSON.parse(localStorage.getItem('FormData') || '[]'))


  useEffect(() => {
    localStorage.setItem('FormData', JSON.stringify(postdata))
  }, [postdata])



  const submitHandler = (e) => {
    e.preventDefault()
    console.log(title, description);

    const copyArr = [...postdata]
    copyArr.push({
      title,
      description
      
    })
    setpostdata(copyArr)

    settitle('')
    setdescription('')
  }

  const deletehandler = (index) => {
    const copyArr = [...postdata]
    copyArr.splice(index, 1)
    setpostdata(copyArr)
  }


  return (
    <div className="p-5 min-h-screen bg-gradient-to-br from-gray-900 to-black">

<div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-10">
      <form onSubmit={submitHandler} className="w-96 bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-6 space-y-4">

        <h2 className="text-2xl font-semibold text-white text-center mb-2">
          Create Post ✍️
        </h2>

        <input
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
          type="text"
          placeholder="Enter post title"
          className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          value={description}
          onChange={(e) => {
            setdescription(e.target.value)
          }}
          placeholder="Enter post description"
          rows="3"
          className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold"
        >
          Create Post 🚀
        </button>
      </form>
      </div>
          <Card postData={postdata} deletePost={deletehandler}/>

    </div>
  )
}

export default App