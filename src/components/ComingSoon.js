import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import styled from "styled-components";
import Earth from './earth/index.jsx';
import TopSection from './topSection/index.jsx';

const ComingSoon = () => {
  return (
    <>
    <CanvasContainer className='relative'>
    
       <Canvas>
        <Suspense fallback={null}>
            <Earth/>
        </Suspense>
       </Canvas>
    </CanvasContainer>
    <div className='relative'>
    <TopSection logo="Coming Soon" 
        slogan="As you know, we shouldn't rush good things, so I am taking my time to build this page. It will be up soon with a few more awesome projects!"
    color="white" />
    </div>
    </>
  )
}

const CanvasContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color:#010718;
    position: relative !important;
`;

export default ComingSoon