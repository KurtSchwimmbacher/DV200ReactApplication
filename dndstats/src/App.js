import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


import './App.css';

// import pages
import Dashboard from "./pages/Dashboard";
import Compare from "./pages/Compare";
import Timeline from "./pages/Timeline";

function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </Router>
  );
}

export default App;
