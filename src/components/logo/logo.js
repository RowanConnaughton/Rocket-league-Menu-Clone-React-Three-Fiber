import { React, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

//import model
import LogoModel from "../models/Logo";
//import styles
import "./logo.styles.scss";

const Logo = () => {

    const ref = useRef()

      
  
  return (
    <div id="logo-container">
      <Canvas  camera={{ fov: 30 }}>
        {/* lights */}
        <pointLight />
        <pointLight position={[0, 10, 15]} />
        <pointLight position={[0, -10, -15]} />
        {/* logo model */}
        <LogoModel scale={[12, 12, 12]}/>
        {/* orbital controls  */}
        <OrbitControls ref={ref} autoRotate />
      </Canvas>
    </div>
  );
};

export default Logo;
