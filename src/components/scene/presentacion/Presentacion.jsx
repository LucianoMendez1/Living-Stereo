import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./presentacion.css";

const Presentacion = React.forwardRef(() => {

  return (
    <>
      <div className='mx-2'>
          <div className="box_canvas ">
            <div className="container_titleHero">
              <h1 className="titleHero">Living Stereo</h1>
            </div>
          
            <video className='videoHero' src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1696907149/ProyectAgustin/2_gtnfou.mp4" autoPlay loop muted></video>

            <div className="container_arrow">
                <div className="arrow bounce">
                  <img src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png" width="100"/></div>
                </div>
                <div className="below"></div>
            </div>
        </div>
     </>
  );
});

export default Presentacion;
