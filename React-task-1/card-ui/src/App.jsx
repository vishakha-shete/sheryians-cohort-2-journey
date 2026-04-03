import React from 'react'
import Card from './components/card'

const id = [
  {
    name: "Sarthak",
    IMAGEURI: "https://randomuser.me/api/portraits/men/1.jpg",
    about: "Frontend developer who loves React and clean UI design."
  },
  {
    name: "Priya",
    IMAGEURI: "https://randomuser.me/api/portraits/women/2.jpg",
    about: "Passionate about UI/UX and creating beautiful interfaces."
  },
  {
    name: "Aman",
    IMAGEURI: "https://randomuser.me/api/portraits/men/3.jpg",
    about: "Backend developer skilled in Node.js and databases."
  },
  {
    name: "Neha",
    IMAGEURI: "https://randomuser.me/api/portraits/women/4.jpg",
    about: "Full-stack developer who enjoys building scalable apps."
  }
];

const App = () => {
  return (
    <div>
      <Card data={id} />
    </div>
  )
}

export default App
