import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.scss'
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Fotter';
import SanctuaireCroyants from './Pages/SanctuaireCroyants/SanctuaireCroyants';
import Header from './Components/Header/Header';
import TeamCherry from './Pages/TeamCherry.jsx/TeamCherry';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={< Home/> } />
        <Route path='/hollow-knight' element={< SanctuaireCroyants />} />
        <Route path='/team-cherry' element={<TeamCherry />} />
      </Routes>
      <Footer />
    </Router>
    
  </React.StrictMode>
);
