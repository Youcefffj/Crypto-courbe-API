import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Crypto from './pages/Crypto';
import TimeChoice from './components/TimeChoice';

const App = () => {
  var cors = require('cors');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} /> {/* Termes general (*) */}
        <Route path="/about" element={<About />} />
        <Route path="/crypto" element={<Crypto />} />

      </Routes>
    </BrowserRouter>
  )
};

export default App;

