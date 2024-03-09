// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Skin from './components/Skin';
import Dental from './components/Dental';
import Eye from './components/Eye';
import Heart from './components/Heart';
import Kidney from './components/Kidney';
import Lungs from './components/Lungs';
import Liver from './components/Liver';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/body/skin' element={<Skin />} />
        <Route path='/body/Dental' element={<Dental />} />
        <Route path='/body/eye' element={<Eye />} />
        <Route path='/body/heart' element={<Heart />} />
        <Route path='/body/kidney' element={<Kidney />} />
        <Route path='/body/lungs' element={<Lungs />} />
        <Route path='/body/liver' element={<Liver />} />
      </Routes>
    </Router>
  );
};

export default App;
