import { React, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

import LogoModel from "../models/Logo";

import "./logo.styles.scss";

const Logo = () => {

    const ref = useRef()

      
  
  return (
    <div id="logo-container">
      <Canvas  camera={{ fov: 30 }}>
        <pointLight />
        <pointLight position={[0, 10, 15]} />
        <pointLight position={[0, -10, -15]} />
        <LogoModel scale={[12, 12, 12]}/>
        <OrbitControls ref={ref} autoRotate />
      </Canvas>
    </div>
  );
};

export default Logo;
