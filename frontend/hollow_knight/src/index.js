import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './Assets/Scss/GlobalStyle/globalStyle.css'
import Home from './Pages/Home/Home';
import SanctuaireCroyants from './Pages/SanctuaireCroyants/SanctuaireCroyants';
import Header from './Components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={< Home/> } />
        <Route path='/hollow-knight' element={< SanctuaireCroyants/> } />
      </Routes>
    </Router>
    
  </React.StrictMode>
);
