import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as companies from "./records/companies";

// --- Import Sites
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Pega from './pages/pega/Pega';
import Dashboard from './pages/dashboard/Dashboard';

// --- Import helpers
import Nav from './components/nav/Nav';
import Option from './components/option/Option';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

//importStyles
import './styles/app.scss'



function App() {

  const [selectedCompanyName, setSelectedCompanyName] = useState("senacor");




  // -------------------------------------------------------------
  const company = companies[selectedCompanyName];

  
  return (
    <div className={`app_${company.name}`}>
      <ErrorBoundary>
        <Router>
          <Nav selectedCompanyName={selectedCompanyName}/>
          <Routes>
            <Route path="/"            element={<Home         selectedCompanyName={selectedCompanyName} />} />
            <Route path="/login"       element={<Login        selectedCompanyName={selectedCompanyName} />} />
            <Route path="/pega"        element={<Pega         selectedCompanyName={selectedCompanyName} />} /> 
            <Route path="/dashboard"   element={<Dashboard    selectedCompanyName={selectedCompanyName} />} /> 
          </Routes>
        </Router>
        <Option handleSelectCompanyName={setSelectedCompanyName}/> 
      </ErrorBoundary>
    </div>
  );
}

export default App;