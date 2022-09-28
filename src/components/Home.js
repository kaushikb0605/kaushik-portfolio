import React,{Suspense} from 'react';
import TextSection from "../components/TextSection";
import { Canvas } from '@react-three/fiber';
import Box from './Box';
import Sphere from './AnimatedSphere';
import { OrbitControls } from '@react-three/drei';

const Home = () => {

  var alerted = localStorage.getItem('alerted') || '';
        if (alerted !== 'yes') {
         alert("Thanks for visiting this site. Please use a larger device for the best viewing experience, while we are work on making this site a bit more mobile responsive");
         localStorage.setItem('alerted','yes');
        }
  return (
    <main>
    <div className='flex flex-col justify-start grid grid-cols-1 divide-y'>
    <div>
        <div className='flex items-start absolute px-300 py-30'>
          <Canvas className='canvas'>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2,3,2]} intensity={1} />
            <Suspense fallback={null}>
              <Sphere />
            </Suspense>         
          </Canvas>
          </div>
          <div className='flex items-start absoute pl-100 py-40'>
          <Canvas className='canvas'>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2,3,2]} intensity={1} />
            <Suspense fallback={null}>
              <Sphere />
            </Suspense>         
          </Canvas>
            <TextSection  />
            <Canvas className='canvas'>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[-2,3,2]} intensity={1} />
              <Suspense fallback={null}>
                <Sphere />
              </Suspense>         
            </Canvas>
          </div>
        </div>
        </div>
        <div>
          <Canvas className='canvas2'>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight  intensity={1} />
          <Suspense fallback={null}>
            <Box />
          </Suspense>         
        </Canvas>
        </div>
        
    </main>
  )
}

export default Home