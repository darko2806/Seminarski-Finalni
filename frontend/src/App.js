import React from 'react';
import Navbar from './komponente/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Home from './komponente/stranice/Home';
import SignUp from './komponente/stranice/SignUp';



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
