import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Beaches from './component/beaches/beaches';
import Birds from './component/birds/birds';
import Foods from './component/food/food';
import Home from './component/home/home';
import Mountains from './component/mountain/mountain';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Home />

        <Routes>
        <Route path='/' element={<Mountains />} />
          <Route path='/beaches' element={<Beaches/>} />
          <Route path='/birds' element={<Birds/>} />
          <Route path='/foods' element={<Foods/>} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
