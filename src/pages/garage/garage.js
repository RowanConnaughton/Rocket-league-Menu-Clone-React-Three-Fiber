import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Provider } from 'react-redux';
import {useSelector, useDispatch} from "react-redux";

import React from "react";
import { store } from "../../redux/store";
import { setCurrentModel, setCurrentWheel, setCurrentPriColor, setCurrentSecColor, setCurrentWinColor, setCurrentTireColor, setCurrentRimColor} from "../../redux/model/model.actions";

//import components
import { PopoverPicker } from "../../components/colorpicker/popoverpicker";

import Card from "../../components/card/card";
import Logo from "../../components/logo/logo";

//import models
import FennecModel from "../../components/models/Fennec";
import OctaneModel from "../../components/models/Octane";
import DominusModel from "../../components/models/Dominus";

//import styles
import "./garage.styles.scss";




const Garage = () => {

  const model = useSelector(state => state.model);
  const {currentModel, wheel, priColor, secColor,  winColor, tireColor, rimColor} = model;
 const dispatch = useDispatch();

 function handleRest() {
  dispatch(setCurrentModel('default'));
  dispatch(setCurrentWheel('default'));
  dispatch(setCurrentPriColor('#001EE0'));
  dispatch(setCurrentSecColor('#2C2C2C'));
  dispatch(setCurrentWinColor('#1A1A1A'));
  dispatch(setCurrentTireColor('#000000'));
  dispatch(setCurrentRimColor('#000000'));
}
 
    
    
     
  return (
    
    <div className="container">
      <Logo/>

      <Card title={'Garage'} >
      
      <section className="inner">
      
        <div className="col1">
        
        
            

            <div className="container-colorpicker">

            <div>
              <h2>Select Car</h2>
              <div className="btn-container">
              
            <button className="btn" onClick={() => {dispatch(setCurrentModel('default'))}}>Fennec</button>
            <button className="btn" onClick={() => {dispatch(setCurrentModel('octane'))}}>Octane</button>
            <button className="btn" onClick={() => {dispatch(setCurrentModel('dominus'))}}>Dominus</button>  
            
            </div>
            </div>
                
            <div>
            <h2>Select Wheels</h2>
            <div className="btn-container">
                <button className="btn" onClick={() => {dispatch(setCurrentWheel('alpha'))}}>Alpha</button>
                <button className="btn" onClick={() => {dispatch(setCurrentWheel('default'))}}>Dieci</button>
                <button className="btn" onClick={() => {dispatch(setCurrentWheel('cristiano'))}}>Cristiano</button>
                </div>
            </div>

            <div className="container-colorpicker" >
                <h2>Primary Color</h2>
                <PopoverPicker color={priColor}  onChange={e => dispatch(setCurrentPriColor(e))} />
                           
            </div>
            <div className="container-colorpicker">
                <h2>Secondary Color</h2>
                <PopoverPicker color={secColor} onChange={e => dispatch(setCurrentSecColor(e))} />
            </div>
            <div className="container-colorpicker">
                <h2>Window Color</h2>
                <PopoverPicker color={winColor}  onChange={e => dispatch(setCurrentWinColor(e))}/>
            </div>
            <div className="container-colorpicker">
                <h2>Tire Color</h2>
                <PopoverPicker color={tireColor}  onChange={e => dispatch(setCurrentTireColor(e))}/>
            </div>
            <div className="container-colorpicker">
                <h2>Rim Color</h2>
                <PopoverPicker color={rimColor} onChange={e => dispatch(setCurrentRimColor(e))} />
            </div>


            <div className="container-colorpicker" >
                <button className="btn" onClick={handleRest}>reset</button>               
            </div>


            </div>
        </div>

        <div className="col2">
          <Canvas className="canvas" dpr={[1, 2]} camera={{ fov: 50, near: 0.1, far: 40, position: [-3.5, 0.5, 3] }}>
            <ambientLight intensity={1} />
            <pointLight args={[0xffffff, 2, 0]} position={[10, 10, 10]} />
            <pointLight args={[0xffffff, 2, 0]} position={[-10, 10, -10]} />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />




{(() => {
  
  switch (currentModel) {
     case 'octane':
         return (
          <Provider store={store}>
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
          </Provider>
         )

         case 'dominus':
          return (
            <Provider store={store}>
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
           </Provider>
          )
     
     default:
         return (
          <Provider store={store}>
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
      </Provider>
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
