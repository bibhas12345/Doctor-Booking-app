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
import Eye1 from './BookingComp/Eye1'
import Eye2 from './BookingComp/Eye2';
import Eye3 from './BookingComp/Eye3';
import Heart1 from './BookingComp/Heart1';
import Heart2 from './BookingComp/Heart2';
import Dental1 from './BookingComp/Dental1';
import Dental2 from './BookingComp/Dental2';
import Skin1 from './BookingComp/Skin1';
import Skin2 from './BookingComp/Skin2';
import Lungs1 from './BookingComp/Lungs1';
import Liver1 from './BookingComp/Liver1';
import Kidney1 from './BookingComp/Kidney1';
import Emergancy from './components/Emergancy';

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
        <Route path='/BookingComp/Eye1' element={<Eye1/>} />
        <Route path='/BookingComp/Eye2' element={<Eye2/>} />
        <Route path='/BookingComp/Eye3' element={<Eye3/>} />
        <Route path='/BookingComp/Heart1' element={<Heart1/>} />
        <Route path='/BookingComp/Heart2' element={<Heart2/>} />
        <Route path='/BookingComp/Dental1' element={<Dental1/>} />
        <Route path='/BookingComp/Dental2' element={<Dental2/>} />
        <Route path='/BookingComp/Skin1' element={<Skin1/>} />
        <Route path='/BookingComp/Skin2' element={<Skin2/>} />
        <Route path='/BookingComp/Lungs1' element={<Lungs1/>} />
        <Route path='/BookingComp/Liver1' element={<Liver1/>} />
        <Route path='/BookingComp/Kideny1' element={<Kidney1/>} />
        <Route path='/body/Emergancy' element={<Emergancy/>}/>
      </Routes>
    </Router>
  );
};

export default App;
