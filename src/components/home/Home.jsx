import React, { useState, useRef, Suspense as ReactSuspense, useEffect } from 'react';
import './home.css';
import { gsap } from 'gsap';

import Presentacion from '../scene/presentacion/Presentacion';
import SliderSection from '../scene/buking/SliderSection';
import PresteitBukingSlider from '../scene/buking/PresteitBukingSlider';
import Biografia from '../scene/biografia/Biografia';
import Animala from '../scene/animala/Animala';

const Home = () => {
  const presentacionRef = useRef(null);
  const biografiaRef = useRef(null);
  const presteitbukingsliderRef = useRef(null);
  const animalaRef = useRef(null);

  const animateComponents = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      presentacionRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 }
    );

    tl.fromTo(
      biografiaRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.5' 
    );

    tl.fromTo(
      presteitbukingsliderRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.5' 
    );

    tl.fromTo(
      animalaRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.5' // Ajusta este valor para la separación
    );
  };

  useEffect(() => {
    animateComponents();
  }, []);

  return (
    <ReactSuspense fallback={<div>Loading Scene...</div>}>
      <div ref={presentacionRef}>
        <Presentacion />
      </div>
      <div ref={biografiaRef}>
        <Biografia />
      </div>
      <div ref={presteitbukingsliderRef}>
        <PresteitBukingSlider />
      </div>
      
     
    </ReactSuspense>
  );
};

export default Home;
