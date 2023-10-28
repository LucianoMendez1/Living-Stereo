import React, { useState, useRef, useEffect } from 'react';
import './home.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Presentacion from '../scene/presentacion/Presentacion';
import PresteitBukingSlider from '../scene/buking/PresteitBukingSlider';
import Biografia from '../scene/biografia/Biografia';
import Redes from '../scene/redes/Redes'; // Importa la componente de Redes
import Animala from '../scene/animala/Animala';

const Home = () => {
  const presentacionRef = useRef(null);
  const biografiaRef = useRef(null);
  const presteitbukingsliderRef = useRef(null);
  const redesRef = useRef(null); // Crea una referencia para Redes
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
      redesRef.current, // Animar la sección de Redes
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.5'
    );

    tl.fromTo(
      animalaRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.5'
    );
  };

  useEffect(() => {
    animateComponents();
  }, []);

  return (
    <div>
      <div ref={presentacionRef}>
        <Presentacion />
      </div>
      <div ref={biografiaRef}>
        <Biografia />
      </div>
      <div ref={presteitbukingsliderRef}>
        <PresteitBukingSlider />
      </div>
      <div ref={redesRef}> 
        <Redes />
      </div>
      <div ref={animalaRef}>
        <Animala />
      </div>
    </div>
  );
};

export default Home;
