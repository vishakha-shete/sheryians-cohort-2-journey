import React from 'react'
import Card from "./components/Card"
import "./App.css"

const person = [
  {
    name: "sarthak",
    age: 21,
    URL: "https://tse1.mm.bing.net/th/id/OIP.tvhbkZN8OVALYqBqTF8ErQHaHa?pid=ImgDet&w=194&h=194&c=7&o=7&rm=3",
    about: "Lorem ipsum dolor sit amet."
  },
  {
    name: "vishakha",
    age: 20,
    URL: "https://tse4.mm.bing.net/th/id/OIP.hXWwNOQw15ZVWKlMs-xv0wHaFQ?rs=1&pid=ImgDetMain&o=7&rm=3",
    about: "Lorem ipsum dolor sit amet."
  },
  {
    name: "Sidhhi",
    age: 22,
    URL: "https://th.bing.com/th/id/OIP.gPjFptCZ8CCNTIygctM1rAHaEp?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    about: "Lorem ipsum dolor sit amet."
  },
  {
    name: "jerry",
    age: 20,
    URL: "https://i.pinimg.com/originals/85/58/29/85582987f7125e4868fdcb28661e934f.png",
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