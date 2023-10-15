import React, { useState, useRef, Suspense as ReactSuspense } from 'react';
import './home.css';

import Presentacion from '../scene/Presentacion';
import SliderSection from '../scene/SliderSection';

const Home = () => {
  return (
    <ReactSuspense fallback={<div>Loading Scene...</div>}>
      <Presentacion/>
      <SliderSection /> 
    </ReactSuspense>
  );
};

export default Home;
