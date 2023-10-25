import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './components/home/Home';

const LazyAgustinBragoni = lazy(() => import('./components/scene/buking/biografias/AgustinBragoni'));
const LazySimonDimarzio = lazy(() => import('./components/scene/buking/biografias/SimonDimarzio'));

const App = () => {
  return (
  <div className='app'>
    <div className="background"></div>
 
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/biografias/AgustinBragoni" element={<LazyAgustinBragoni />} />
          <Route path="/biografias/SimonDimarzio" element={<LazySimonDimarzio />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </div>
  );
};

export default App;
