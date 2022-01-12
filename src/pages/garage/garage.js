import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import React, {useState} from "react";

import { PopoverPicker } from "../../components/colorpicker/popoverpicker";

import Card from "../../components/card/card";


//import models
import FennecModel from "../../components/models/Fennec";
import OctaneModel from "../../components/models/Octane";
import DominusModel from "../../components/models/Dominus";

import "./garage.styles.scss";






const Garage = () => {

  

    const [priColor, setPriColor] = useState("");
    const [secColor, setSecColor] = useState("");
    const [winColor, setWinColor] = useState("");
    const [tireColor, setTireColor] = useState("");
    const [rimColor, setRimColor] = useState("");
    const [model, setModel] = useState('default');

    const [wheel, setWheel] = useState('default');
    
     
  return (
    <div className="container">


      <Card title={'Garage'} >
      
      <section className="inner">
      
        <div className="col1">
        
        
            

            <div className="container-colorpicker">

            <div>
              <h2>Select Car</h2>
              <div className="btn-container">
            <button className="btn" onClick={() => {setModel('default')}}>Fennec</button>
            <button className="btn" onClick={() => {setModel('octane')}}>Octane</button>
            <button className="btn" onClick={() => {setModel('dominus')}}>Dominus</button>
            </div>
            </div>
                
            <div>
            <h2>Select Wheels</h2>
            <div className="btn-container">
                <button className="btn" onClick={() => {setWheel('alpha')}}>Alpha</button>
                <button className="btn" onClick={() => {setWheel('default')}}>Dieci</button>
                <button className="btn" onClick={() => {setWheel('cristiano')}}>Cristiano</button>
                </div>
            </div>

            <div className="container-colorpicker" >
                <h2>Primary Color</h2>
                <PopoverPicker color={priColor} onChange={setPriColor} />
                           
            </div>
            <div className="container-colorpicker">
                <h2>Secondary Color</h2>
                <PopoverPicker color={secColor} onChange={setSecColor} />
            </div>
            <div className="container-colorpicker">
                <h2>Window Color</h2>
                <PopoverPicker color={winColor} onChange={setWinColor} />
            </div>
            <div className="container-colorpicker">
                <h2>Tire Color</h2>
                <PopoverPicker color={tireColor} onChange={setTireColor} />
            </div>
            <div className="container-colorpicker">
                <h2>Rim Color</h2>
                <PopoverPicker color={rimColor} onChange={setRimColor} />
            </div>


            <div className="container-colorpicker" >
                <button className="btn" onClick={() => window.location.reload(false)}>reset</button>               
            </div>


            </div>
        </div>

        <div className="col2">
          <Canvas className="canvas" dpr={[1, 2]} camera={{ fov: 40, near: 0.1, far: 40, position: [-3.5, 0.5, 3] }}>
            <ambientLight intensity={1} />
            <pointLight args={[0xffffff, 2, 0]} position={[10, 10, 10]} />
            <pointLight args={[0xffffff, 2, 0]} position={[-10, 10, -10]} />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />




{(() => {
  
  switch (model) {
     case 'octane':
         return (
          <OctaneModel 
          wheel={wheel}
                priColor={priColor}
                secColor={secColor}
                winColor={winColor}
                tireColor={tireColor}
                rimColor={rimColor}
                position={[0, -0.5, 0]}
                rotation={[0, 500, 0]}
                scale={[0.02, 0.02, 0.02]}
          />
         )

         case 'dominus':
          return (
           <DominusModel 
           wheel={wheel}
                 priColor={priColor}
                 secColor={secColor}
                 winColor={winColor}
                 tireColor={tireColor}
                 rimColor={rimColor}
                 position={[0, -0.5, 0]}
                 rotation={[0, 500, 0]}
                 scale={[0.02, 0.02, 0.02]}
           />
          )
     
     default:
         return (
          <FennecModel
          wheel={wheel}
          priColor={priColor}
          secColor={secColor}
          winColor={winColor}
          tireColor={tireColor}
          rimColor={rimColor}
        position={[0, -0.5, 0]}
        rotation={[0, 500, 0]}
        scale={[0.02, 0.02, 0.02]}
      />
         )
  }

})()}

          </Canvas>
        </div>
      </section>
      </Card>
    </div>
  );
};

export default Garage;
