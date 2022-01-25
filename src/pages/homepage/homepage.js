import * as THREE from "three";
import { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import DatGui, { DatNumber } from "react-dat-gui";

//import components
import Menu from "../../components/menu/menu";

//import models
import FennecModel from "../../components/models/Fennec";
import BallModel from "../../components/models/Ball";
import StadiumModel from "../../components/models/Stadium";


//import stlyes
import "./homepage.styles.scss";
import "react-dat-gui/dist/index.css";

//camera pan animation
function damp(target, to, step, delta) {
  if (target instanceof THREE.Vector3) {
    target.x = THREE.MathUtils.damp(target.x, to[0], step, delta);
    target.y = THREE.MathUtils.damp(target.y, to[1], step, delta);
    target.z = THREE.MathUtils.damp(target.z, to[2], step, delta);
  }
}

//camera pan animation
function Animation() {
  useFrame((state, delta) => {
    const step = 2;

    damp(state.camera.position, [-1.4, 0.2, 1.9], step, delta);
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });
  return <mesh></mesh>;
}

const HomePage = () => {
  //camera position
  const [Cposition, setCposition] = useState({
    positionx: 10,
    positiony: 1,
    positionz: 1.5,
  });

  return (
    <div className="container-home">
      <Menu />
      <Canvas id="canvas" flat dpr={[1, 2]} shadows>
        {/* default camera */}
        <PerspectiveCamera
          makeDefault
          position={[
            Cposition.positionx,
            Cposition.positiony,
            Cposition.positionz,
          ]}
        />
        {/* camera animation */}
        <Animation />

          {/* set sky box */}
        <Environment background={true} files="/resources/flower_road_1k.hdr" />

          {/* lights */}
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.8}
          position={[0, 10, 15]}
          penumbra={1}
          shadow-mapSize-Width={2048}
          shadow-mapSize-Height={2048}
          castShadow
        />
          {/* orbital controls */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />

          {/* stadium model */}
        <StadiumModel
          receiveShadow
          position={[0, -0.5, 0]}
          rotation={[0, 400, 0]}
          scale={[0.02, 0.02, 0.02]}
        />
        {/* car model */}
        <FennecModel
          castShadow
          position={[0, -0.5, 0]}
          rotation={[0, 500, 0]}
          scale={[0.01, 0.01, 0.01]}
        />
          {/* ball model */}
        <BallModel
          castShadow
          position={[5, 0.5, -2]}
          rotation={[0, 0, 0]}
          scale={[0.01, 0.01, 0.01]}
        />
      </Canvas>
      {/* dat gui controls */}
      <DatGui data={Cposition} onUpdate={setCposition}>
        <DatNumber
          path="positionx"
          label="Position X"
          min={-10}
          max={10}
          step={0.1}
        />
        <DatNumber
          path="positiony"
          label="Position Y"
          min={-10}
          max={10}
          step={0.1}
        />
        <DatNumber
          path="positionz"
          label="Position Z"
          min={-10}
          max={10}
          step={0.1}
        />
      </DatGui>
    </div>
  );
};

export default HomePage;
