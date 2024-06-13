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
import Signup from './pages/signup';
import MainSuccess from './pages/mainsuccess';
import Home from './pages/home';
import Error from './pages/error';
import Help from './pages/help';
import Investors from './pages/investor';
import InvestorFrom from './pages/investorForm';
import About from './pages/about';
import Articles1 from './pages/articles/articles1';
import Articles2 from './pages/articles/articles2';
import Articles3 from './pages/articles/articles3';
import Articles4 from './pages/articles/articles4';
// import Payment from './pages/payment';
// import MainForm from './pages/mainfrom';

export default function App() {
  const [email, setEmail] = React.useState('');
  const [priceIndex, setPriceIndex] = React.useState(null);

  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/page" element={<Landing />} />
        {/* <Route path='/home' element={<Home/>}/> */}
        <Route path='/main' element={<Main1/>}/>
        <Route path='/home' element={<Home setPriceIndex={setPriceIndex}/>}/>
        <Route path='/' element={<Main1/>}/>
        <Route path='/*' element={<Error/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/breaking-barriers-in-communication-collaboration-with-workfast.ai' element={<Articles1/>}/>
        <Route path='/blog/top-7-ways-workfast.ai-can-revolutionise-your-project-management' element={<Articles2/>}/>
        <Route path='/blog/beginner-guide-to-product-management' element={<Articles3/>}/>
        <Route path='/blog/looking-for-a-new-platform-for-project-management' element={<Articles4/>}/>
        <Route path='/landing' element={<LandingPage/>}/>
        <Route path='/landingin' element={<LandingPageInd email={email} setEmail={setEmail}/>}/>
        <Route path='/development' element={<NewLanding/>}/>
        {/* <Route path='/ContactUs' element={<ContactUs/>}/> */}
        <Route path='/refund' element={<Refund/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/calendly' element={<Calender/>}/>
        <Route path='/landingin/form' element={<Form/>}/>
        <Route path='/landingin/success' element={<Success/>}/>
        <Route path='/success' element={<MainSuccess/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/investor' element={<Investors/>}/>
        <Route path='/investor/form' element={<InvestorFrom/>}/>
        {/* <Route path='/payment' element={<Payment priceIndex={priceIndex}/>}/> */}
      </Routes>
    </Router>
  )
}

