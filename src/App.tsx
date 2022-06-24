import React from 'react';
import './App.css';
import {Enterprise} from './components/enterprise';
import {University} from './components/university';
import {Government} from './components/government';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li><Link to = "/government">Governments</Link></li>
          <li><Link to = "/enterprise"> Enterprises</Link></li>
          <li><Link to = "/university">Universities</Link></li>
        </ul>
        <Routes>
          <Route path = '/government' element = {<Government />} />
          <Route path = '/enterprise' element = {<Enterprise/>} />
          <Route path = '/university' element = {<University/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}


export default App;
