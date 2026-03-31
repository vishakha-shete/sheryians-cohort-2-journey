import React from 'react'
import Card from "./components/Card"
import "./App.css"

const person = [
  {
    name: "sarthak",
    age: 23,
    URL: "https://tse1.mm.bing.net/th/id/OIP.tvhbkZN8OVALYqBqTF8ErQHaHa?pid=ImgDet&w=194&h=194&c=7&o=7&rm=3",
    about: "Lorem ipsum dolor sit amet."
  },
  {
    name: "vishakha",
    age: 22,
    URL: "https://tse1.mm.bing.net/th/id/OIP.tvhbkZN8OVALYqBqTF8ErQHaHa?pid=ImgDet&w=194&h=194&c=7&o=7&rm=3",
    about: "Lorem ipsum dolor sit amet."
  }
]

const App = () => {
  return (
    <div>
      <Card data={person} status="follow" />
    </div>
  )
}

export default App