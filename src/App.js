
import './App.css';
import About from './componets/About';
import Project from './componets/Project';
import Home from './componets/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './componets/Contact';
import React from 'react';
import Navbar from './componets/Navbar';
import { Container } from '@mui/material'; 


function App() {
  return (
     <Container maxWidth="lg">
      <Router>
        <Navbar/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router>
     </Container>
  );
}

export default App;
