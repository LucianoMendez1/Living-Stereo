import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './components/home/Home';
import Albumliving from './components/scene/sello/album1/Carousel/Carousel';


const LazyAgustinBragoni = lazy(() => import('./components/scene/buking/biografias/AgustinBragoni'));
const LazySimonDimarzio = lazy(() => import('./components/scene/buking/biografias/SimonDimarzio'));
const LazyB2B = lazy(() => import('./components/scene/buking/biografias/B2B'));

const LazyB2B2B2 = lazy(() => import('./components/scene/buking/biografias/B2B/../B2B'));
const LazyB2B2Agusbragoni = lazy(() => import('./components/scene/buking/biografias/B2B/../AgustinBragoni'));
const LazyB2B2NicolasNieves = lazy(() => import('./components/scene/buking/biografias/B2B/../NicolasNieves'));
const LazyB2B2Simondimarzio = lazy(() => import('./components/scene/buking/biografias/B2B/../SimonDimarzio'));
const LazyNicolasNieves = lazy(() => import('./components/scene/buking/biografias/NicolasNieves'));
const LazyAlbumliving = lazy(() => import('./components/scene/sello/album1/Carousel/Carousel'));

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
          <Route path="/biografias/NicolasNieves" element={<LazyNicolasNieves />} />

          {/* rutas B 2 b */}
          <Route path="/biografias/NicolasNieves" element={<LazyNicorouta />} />
          <Route path='/biografias/B2B/biografias/B2B' element={<LazyB2B2B2 />} />
          <Route path='/biografias/B2B/biografias/AgustinBragoni' element={<LazyB2B2Agusbragoni />} />
          <Route path='/biografias/B2B/biografias/Simondimarzio' element={<LazyB2B2Simondimarzio />} />
          <Route path='/biografias/B2B/biografias/NicolasNieves' element={<LazyB2B2NicolasNieves />} />
          {/* rutas NICO Slider */}
   
         
          {/* rutas agus */}

          {/* rutas simon */}
          <Route path ="/album1/Carousel/Carousel" element ={<LazyAlbumliving />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </div>
  );
};

export default App;
