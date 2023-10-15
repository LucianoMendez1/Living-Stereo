import React, { useState, useRef, Suspense as ReactSuspense } from 'react';
import './home.css';


import SceneScroll from '../scene/SceneScroll';

const Home = () => {
  return (
    <ReactSuspense fallback={<div>Loading Scene...</div>}>
      <SceneScroll /> 
    </ReactSuspense>
  );
};

export default Home;
