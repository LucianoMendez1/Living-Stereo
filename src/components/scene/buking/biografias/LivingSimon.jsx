import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../../buking/sliderSection.css";
import "./livingbragoni.css";



const LivingSimon = () => {
  const [currentBackgroundVideoBuking] = useState(
    "https://res.cloudinary.com/dvnhn35l4/video/upload/v1697516947/46EEF93D-F18F-41C0-B859-F0EB4A775B95_1_gcvnyh.mov"
  );
  const videoRef = useRef(null);
  const titulopresteitRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true); // Estado para controlar el sonido

  useEffect(() => {
    const video = videoRef.current;
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

  // Función para alternar el sonido del video
  const toggleSound = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div className="content">
      <div className="hero-section">
        <div className="container">
          <div data-speed=".75" className="main-header">
            <h1 className="main-titlesimon">Living Stereo</h1>
            <h6 className="subtitle-simon">Simon Di Marzioo</h6>
          </div>
          <video
            ref={videoRef}
            data-speed=".6"
            className="background-videoLivingbragoni"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          >
            <source
              src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1698108274/3_dl3rh9.mp4"
              type="video/mp4"
            />
            Tu navegador no admite el elemento de videos.
          </video>
          <button onClick={toggleSound} className={`vinyl-button ${isMuted ? 'muted' : 'unmuted'}`}>
  <img src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697857960/klipartz.com_1_tw5vrg.png" alt="Vinilo" className="vinyl-img" />
</button>
        </div>
        
      </div>
    </div>
  );
};

export default LivingSimon;
