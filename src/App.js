import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main1 from './pages/main1';
import Error from './pages/error';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main1/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
      <ToastContainer />
    </Router>
  )
}

