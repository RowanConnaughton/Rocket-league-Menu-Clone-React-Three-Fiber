
import { Routes, Route, } from "react-router-dom";

import HomePage from './pages/homepage/homepage';
import Garage from "./pages/garage/garage";
import Replay from "./pages/replay/replay"
import { Credits } from "./pages/credits/credits";

import './App.css';



function App() {
  return (
    <div className='App'>
      
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/garage" element={<Garage />} />
          <Route path="/replay" element={<Replay />} />
          <Route path="/credits" element={<Credits />} />
      </Routes>
    
    </div>
  );
}

export default App;
