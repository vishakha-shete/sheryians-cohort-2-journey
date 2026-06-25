import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from './components/Experience'
import { OrbitControls } from '@react-three/drei'

const App = () => {
  return (
    <>
      <div className="parent h-screen w-full bg-black">
        <Canvas camera={{position: [0,7,0]}}>
          <Experience />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  )
}

export default App;