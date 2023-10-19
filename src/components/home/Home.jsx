import React, { useState, useRef, Suspense as ReactSuspense, useEffect } from 'react';
import './home.css';
import { gsap } from 'gsap'; // Importa GSAP

import Presentacion from '../scene/presentacion/Presentacion';
import SliderSection from '../scene/buking/SliderSection';
import PresteitBukingSlider from '../scene/buking/PresteitBukingSlider';
import Biografia from '../scene/biografia/Biografia';

const Home = () => {
  // Usa useRef para acceder a los elementos del DOM
  const presentacionRef = useRef(null);
  const biografiaRef = useRef(null);
  const presteitbukingslider = useRef(null);

  // Define una función para animar los componentes
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
      presteitbukingslider.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.5' // Inicia 0.5 segundos después de la animación anterior
    );
  };

  useEffect(() => {
    animateComponents();
  }, []);

  return (
    <ReactSuspense fallback={<div>Loading Scene...</div>}>
      <Presentacion ref={presentacionRef} />
      <Biografia ref={biografiaRef} />
      <PresteitBukingSlider ref={presteitbukingslider} />
    </ReactSuspense>
  );
};

export default Home;
