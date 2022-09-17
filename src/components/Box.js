import React from 'react';
// import  {useLoader} from '@react-three/fiber';
// import { TextureLoader } from 'three';
// import texture from '../images/map.jpg';

const Box = () => {

    // const colorMap=useLoader(TextureLoader,texture);

  return (
    <mesh rotation={[90,0,20]}>
        {/* consists of geometry and 3d model */}
        <boxBufferGeometry attach="geometry" args={[3,3,3]} />
        <meshNormalMaterial attach="material" />
        {/* <meshStandardMaterial attach="material" map={colorMap} /> */}
        {/* <meshLambertMaterial attach="material" color="hotpink" /> */}
    </mesh>
  )
}

export default Box