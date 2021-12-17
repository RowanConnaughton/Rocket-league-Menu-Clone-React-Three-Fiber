import { useState } from "react"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { useLoader } from "@react-three/fiber";
import DatGui, { DatNumber } from 'react-dat-gui';



import Menu from "../../components/menu/menu";

import FennecModel from "../../components/models/Fennec";
import BallModel from "../../components/models/Ball";

import "./homepage.styles.scss";
import 'react-dat-gui/dist/index.css';



const HomePage = () => {
  // const gltf = useLoader(GLTFLoader, "models/stadium/scene.gltf");

  const [Cposition, setCposition] = useState({
    positionx: -1.4,
    positiony: 0.2,
    positionz: 1.9
  });


  
 // camera={{ fov: 50, near: 0.1, far: 40, position: [-1.8, 0, 1.6] }}
  return (
    <div className="container-home">
        <Menu/>
      <Canvas id="canvas"
        flat
        dpr={[1, 2]}
        shadows
      >

        <PerspectiveCamera makeDefault position={[Cposition.positionx, Cposition.positiony, Cposition.positionz]} />

        <Environment
          background={true} // Whether to affect scene.background
          files={[
            "posx.jpg",
            "negx.jpg",
            "posy.jpg",
            "negy.jpg",
            "posz.jpg",
            "negz.jpg",
          ]} // Array of cubemap files OR single equirectangular file
          path={"/resources/"} // Path to the above file(s)
        />

      <ambientLight intensity={0.5} />
      <spotLight
        intensity={0.8}
        position={[0, 10, 15]}
        penumbra={1}
        shadow-mapSize-Width={2048}
        shadow-mapSize-Height={2048}
        castShadow
      />



        <OrbitControls
          enablePan={true}
          enableZoom={false}
          enableRotate={true}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />

        {/* <primitive
          object={gltf.scene}
          position={[0, -0.5, 0]}
          rotation={[0, 400, 0]}
          scale={[20, 20, 20]}
          receiveShadow
        /> */}

        <FennecModel
          
          position={[0, -0.5, 0]}
          rotation={[0, 500, 0]}
          scale={[0.01, 0.01, 0.01]}
        />
       
       <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -.5, 0]} receiveShadow>
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshPhongMaterial attach="material" color="#d1cebd" />
      </mesh>

     

        <BallModel  position={[5, .5, -2]} rotation={[0, 0, 0]} scale={[0.01, 0.01, 0.01]} />
        
      </Canvas>
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
