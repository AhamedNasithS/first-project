import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './pages/landing';
import NewLanding from './pages/newLanding';
// import ContactUs from './pages/contact';
import Refund from './pages/refund';
import Privacy from './pages/privacy';
import Terms from './pages/terms';
import Home from './pages/home 2';
// import Navbar from './pages/navbar';
// import Main from './pages/main';
import Main1 from './pages/main1';
import Blog from './pages/blog';
import Calender from './pages/calender';
import LandingPage from './pages/landingpage';

export default function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/page" element={<Landing />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/main' element={<Main1/>}/>
        <Route path='/*' element={<Main1/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/landing' element={<LandingPage/>}/>
        <Route path='/development' element={<NewLanding/>}/>
        {/* <Route path='/ContactUs' element={<ContactUs/>}/> */}
        <Route path='/refund' element={<Refund/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/calendly' element={<Calender/>}/>
      </Routes>
    </Router>
  )
}

