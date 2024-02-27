import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { uniqa, allianz, zurich } from "./records/insuranceFirms";

// --- Import Sites
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Pega from './pages/pega/Pega';

// --- Import helpers
import Nav from './components/Nav';
import Option from './components/Option';
import ErrorBoundary from './components/ErrorBoundary';

//importStyles
import './styles/app.scss'



function App() {

  const [selectedFirmName, setSelectedFirmName] = useState("allianz");

  const firms = { uniqa, allianz, zurich };
  


  // -------------------------------------------------------------
  const firm = firms[selectedFirmName];

  
  return (
    <div className={`app_${firm.name}`}>
      <ErrorBoundary>
        <Router>
          <Nav selectedFirmName={selectedFirmName}/>
          <Routes>
            <Route path="/"       element={<Home    selectedFirmName={selectedFirmName} />} />
            <Route path="/login"  element={<Login   selectedFirmName={selectedFirmName} />} />
            <Route path="/pega"   element={<Pega    selectedFirmName={selectedFirmName} />} /> 
          </Routes>
        </Router>
        <Option handleSelectFirmName={setSelectedFirmName}/> 
      </ErrorBoundary>
    </div>
  );
}

export default App;