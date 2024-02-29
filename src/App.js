import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './pages/landing';
import Landing1 from './pages/landing1';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Landing />} />
        <Route path='/development' element={<Landing1/>}/>
      </Routes>
    </Router>
  )
}

