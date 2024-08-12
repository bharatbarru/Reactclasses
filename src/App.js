import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from "react";
import Navbar from './Navbar';
import Conatct from './Conatct';
import About from './About';
import Home from './Home';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Conatct />} />
    </Routes>
    </BrowserRouter>
     );
}

export default App;


