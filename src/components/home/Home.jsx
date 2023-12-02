import React, { useRef, useEffect, Suspense, lazy } from 'react';
import './home.css';
import { gsap } from 'gsap';
const Presentacion = lazy(() => import('../scene/presentacion/Presentacion'));
const Biografia = lazy(() => import('../scene/biografia/Biografia'));
const Redes = lazy(() => import('../scene/redes/Redes'));
const Animala = lazy(() => import('../scene/animala/Animala'));
const SelloDiscrografico = lazy(() => import('../scene/sello/SelloDiscrografico'));
const SliderSection = lazy(() => import('../scene/buking/SliderSection'));


const Home = () => {

  return (
    <div className="home">

    <Suspense fallback={<div>Loading...</div>}>
      <Presentacion />
      <Biografia />
      <SliderSection />
      <Redes />
      <Animala />
      <SelloDiscrografico />
    </Suspense>
    </div>

  );
};

export default Home;
