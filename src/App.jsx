import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/home/Home';
import Preload from './components/scene/preload/Preload';
import Lenis from '@studio-freight/lenis';
import Nav from './components/scene/Nav/Nav';
import Preskit from './components/scene/buking/biografias/test/Presskit/Preskit';

const AgustinBragoni = lazy(() => import('./components/scene/buking/biografias/test/BragoniDetail/BragoniDetail'));
const SimonDimarzio = lazy(() => import('./components/scene/buking/biografias/test/DiMarzioDetail/DiMarzioDetail'));
const B2B = lazy(() => import('./components/scene/buking/biografias/test/B2BDetail/B2BDetail'));
const NicolasNieves = lazy(() => import('./components/scene/buking/biografias/test/NicolasDetail/NicolasDetail'));
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



  return (
  <div className='app'>
    <div className="background"></div>
    <Preload/>
    <Nav/>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/AgustinBragoni" element={<AgustinBragoni />} />
          <Route path="/SimonDimarzio" element={<SimonDimarzio />} />
          <Route path="/NicolasNieves" element={<NicolasNieves />} />
          <Route path="/B2B" element={<B2B />} />
          <Route path="/Preskit" element={<Preskit />} />

         
          {/* Rutas agus */}
          <Route path ="/album1/Main" element ={<Albumliving />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </div>
  );
};

export default App;
