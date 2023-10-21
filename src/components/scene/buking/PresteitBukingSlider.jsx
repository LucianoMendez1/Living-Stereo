import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SliderSection from "../buking/SliderSection";
import "../buking/sliderSection.css";
import "../buking/presteitbuking.css";

const PresteitBukingSlider = React.forwardRef((props, ref) => {
  const titulopresteitRef = useRef(null);

  useEffect(() => {
    const titulopresteit = titulopresteitRef.current;
    const scrollTriggerContainer = document.querySelector(".home-container");

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(titulopresteit, {
      scrollTrigger: {
        trigger: titulopresteit,
        start: "top bottom",
      },
      opacity: 1,
      y: 0,
      duration: 1.5,
    });
  }, []);

  return (
    <div className="home-container" ref={ref}>
      <div className="start-screen">
        <div className="start-content1">
          <div className="titulopresteit" ref={titulopresteitRef}>
            <span>Press Kit Booking</span>
          </div>
          <SliderSection />
        </div>
      </div>
    </div>
  );
});

export default PresteitBukingSlider;
