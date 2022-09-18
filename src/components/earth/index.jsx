import React, { useRef } from 'react'

import EarthDayMap from '../../images/textures/8k_earth_daymap.jpg';
import EarthNormal from '../../images/textures/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../../images/textures/8k_earth_specular_map.jpg';
import EarthCloudMap from '../../images/textures/8k_earth_clouds.jpg';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Earth = (props) => {

    
    const [colorMap,normalMap,specularMap,cloudsMap] = useLoader(TextureLoader,[EarthDayMap,EarthNormal,EarthSpecularMap,EarthCloudMap]);
    
    const earthRef= useRef();
    const cloudsRef = useRef();

    useFrame(({clock})=>{
        earthRef.current.rotation.y = clock.getElapsedTime()/6;
        cloudsRef.current.rotation.y = clock.getElapsedTime()/10;
    });

    return (
    <>
        <pointLight color="#f6f3ea" position={[2,0,5]} intensity={1.5} />
        <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />
        <mesh ref={cloudsRef} position={[0,0,3]}>
            <sphereGeometry args={[1.006,32,32]} />
            <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide} />
        </mesh>
        <mesh {...props} position={[0, 0, 3]} ref={earthRef}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshPhongMaterial specularMap={specularMap} />
            <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.6} />
            <OrbitControls enableZoom enablePan enableRotate zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4}
             />
        </mesh>
    </>)
}

export default Earth