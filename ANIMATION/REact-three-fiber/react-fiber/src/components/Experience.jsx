import { Instance, Instances, MatcapTexture, useGLTF, useTexture } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import React from 'react'
import { useRef } from 'react';
import * as THREE from 'three'
import { texture } from 'three/src/nodes/accessors/TextureNode.js';

const Experience = () => {
    const cubeRef = useRef(null)

    useFrame((state, delta) => {
    })        // cubeRef.current.rotation.y += delta


    const  {texture,texture2} = useTexture(
        {
            texture: "https://images.unsplash.com/photo-1782177261793-823b94aa0555?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
            texture2: "https://images.unsplash.com/photo-1782177386774-b1a0433cd8b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"
        }
    )


    return (
        <>
        <Instances>
            < torusKnotGeometry/>
            <THREE.MeshMatcapMaterial />
        </Instances>
        
        </>
    );
};

export default Experience