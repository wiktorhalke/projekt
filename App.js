import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sports from './pages/Sports';
import Concerts from './pages/Concerts';
import Others from './pages/Others';
import Login from './components/Login';
import Registration from './components/Registration';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/others" element={<Others />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;