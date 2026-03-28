import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Students from './pages/Students';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="*" element={<h1 style={{padding:'20px'}}>404 - Page Not Found! 😢</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;