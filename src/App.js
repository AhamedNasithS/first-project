import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './pages/landing';
import NewLanding from './pages/newLanding';
// import ContactUs from './pages/contact';
import Refund from './pages/refund';
import Privacy from './pages/privacy';
import Terms from './pages/terms';
// import Home from './pages/home 2';
// import Navbar from './pages/navbar';
// import Main from './pages/main';
import Main1 from './pages/main1';
import Blog from './pages/blog';
import Calender from './pages/calender';
import LandingPage from './pages/landingpage';
import LandingPageInd from './pages/landingpageInd';
import Form from './pages/form';
import Success from './pages/success';

export default function App() {
  const [email, setEmail] = React.useState('');
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/page" element={<Landing />} />
        {/* <Route path='/home' element={<Home/>}/> */}
        <Route path='/main' element={<Main1/>}/>
        <Route path='/*' element={<Main1/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/landing' element={<LandingPage/>}/>
        <Route path='/landingin' element={<LandingPageInd email={email} setEmail={setEmail}/>}/>
        <Route path='/development' element={<NewLanding/>}/>
        {/* <Route path='/ContactUs' element={<ContactUs/>}/> */}
        <Route path='/refund' element={<Refund/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/calendly' element={<Calender/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
    </Router>
  )
}

