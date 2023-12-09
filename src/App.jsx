import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './components/home/Home';
import Preload from './components/scene/preload/Preload';
import Lenis from '@studio-freight/lenis';
import BragoniDetail from './components/scene/buking/biografias/test/BragoniDetail/BragoniDetail';

const AgustinBragoni = lazy(() => import('./components/scene/buking/biografias/AgustinBragoni/AgustinBragoni'));
const SimonDimarzio = lazy(() => import('./components/scene/buking/biografias/SimonDiMarzio/SimonDimarzio'));
const B2B = lazy(() => import('./components/scene/buking/biografias/B2B/B2B'));
const NicolasNieves = lazy(() => import('./components/scene/buking/biografias/NicolasNieves/NicolasNieves'));
const Albumliving = lazy(() => import('./components/scene/sello/album1/Main'));


const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(1.9, -8 * t)),
    });
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);


  }, []);




    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    useEffect(() => {
      scrollToTop();
    }, []);
  
  

  return (
  <div className='app'>
    <div className="background"></div>
    <Preload/>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biografias/AgustinBragoni" element={<BragoniDetail />} />
          <Route path="/biografias/SimonDimarzio" element={<SimonDimarzio />} />
          <Route path="/biografias/NicolasNieves" element={<NicolasNieves />} />

          {/* rutas B 2 b */}
          <Route path="/biografias/B2B" element={<B2B />} />
          <Route path='/biografias/B2B/biografias/B2B' element={<B2B />} />
          <Route path='/biografias/B2B/biografias/AgustinBragoni' element={<AgustinBragoni />} />
          <Route path='/biografias/B2B/biografias/Simondimarzio' element={<SimonDimarzio />} />
          <Route path='/biografias/B2B/biografias/NicolasNieves' element={<NicolasNieves />} />
          {/* rutas NICO Slide */}
         
          {/* Rutas agus */}
          <Route path ="/album1/Main" element ={<Albumliving />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </div>
  );
};

export default App;
