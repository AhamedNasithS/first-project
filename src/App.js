import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './pages/landing';
// import Landing1 from './pages/landing1';
// import ContactUs from './pages/contact';
import Refund from './pages/refund';
import Privacy from './pages/privacy';
import Terms from './pages/terms';
import Home from './pages/home 2';
// import Navbar from './pages/navbar';
import Main from './pages/main';
import Main1 from './pages/main1';

export default function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/*" element={<Landing />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/main1' element={<Main1/>}/>
        {/* <Route path='/development' element={<Landing1/>}/> */}
        {/* <Route path='/ContactUs' element={<ContactUs/>}/> */}
        <Route path='/refund' element={<Refund/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/terms' element={<Terms/>}/>
      </Routes>
    </Router>
  )
}

