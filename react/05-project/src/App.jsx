import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/About">About</Link> |
        <Link to="/Contact">Contact</Link> |
        <Link to="/Zoha">Zoha</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="*" element={<h1>404 - Page Nahi Mila! 😢</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App