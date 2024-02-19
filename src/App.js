import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { uniqa, allianz, zurich } from "./records/insuranceFirms";

// --- Import Sites
import Home from './sites/Home';
import Login from './sites/Login';
import Pega from './sites/Pega';

// --- Import helpers
import Nav from './components/Nav';
import Option from './helper/Option';

//importStyles
import './styles/app.scss'



function App() {
  const [selectedFirmName, setSelectedFirmName] = useState("uniqa");

  const firms = { uniqa, allianz, zurich };
  


  // -------------------------------------------------------------
  const firm = firms[selectedFirmName];

  
  return (
    <div className={`app_${firm.name}`}>
      <Router>
        <Nav selectedFirmName={selectedFirmName}/>
        <Routes>
          <Route path="/"       element={<Home    selectedFirmName={selectedFirmName} />} />
          <Route path="/login"  element={<Login   selectedFirmName={selectedFirmName} />} />
          <Route path="/pega"   element={<Pega    selectedFirmName={selectedFirmName} />} /> 
        </Routes>
      </Router>
      <Option handleSelectFirmName={setSelectedFirmName}/> 
    </div>
  );
}

export default App;