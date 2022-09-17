import React,{Suspense} from 'react';
import TextSection from "../components/TextSection";
import { Canvas } from '@react-three/fiber';
import Box from './Box';
import Sphere from './AnimatedSphere';
import { OrbitControls } from '@react-three/drei';

const Home = () => {
  return (
    <main>
    <div className='flex justify-start'>
        <div className='flex items-start absolute px-15 py-30'>
          <Canvas className='canvas'>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2,3,2]} intensity={1} />
            <Suspense fallback={null}>
              <Sphere />
            </Suspense>         
          </Canvas>
          </div>
          <div className='flex items-start absolute pl-100 py-40'>
          <Canvas className='canvas'>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2,3,2]} intensity={1} />
            <Suspense fallback={null}>
              <Sphere />
            </Suspense>         
          </Canvas>
          </div>
            <TextSection />
        </div>
        
        <Canvas className='canvas'>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2,3,2]} intensity={1} />
          <Suspense fallback={null}>
            <Box />
          </Suspense>         
        </Canvas>

        
    </main>
  )
}

export default Home