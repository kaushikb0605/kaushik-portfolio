import React from 'react';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1,70,100]} scale={1.5}>
        <MeshDistortMaterial 
            color='#8352FD'
            attach='material'
            distort={0.5}
            speed={1}
            roughness={0.5}
        />
    </Sphere>
  )
}

export default AnimatedSphere