
import { Routes, Route, } from "react-router-dom";

import HomePage from './pages/homepage/homepage';
import Garage from "./pages/garage/garage";

import './App.css';





function App() {
  return (
    <div className='App'>
      
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/garage" element={<Garage />} />
      </Routes>
    
    </div>
  );
}

export default App;
