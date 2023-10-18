import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SliderSection from "./SliderSection"; // Importa SliderSection desde el archivo adecuado
import "./biografia.css";
import "./presteitbuking.css";


const PresteitBukingSlider = () => {
  const [currentBackgroundVideo] = useState(
    "https://res.cloudinary.com/dvnhn35l4/video/upload/v1697516947/46EEF93D-F18F-41C0-B859-F0EB4A775B95_1_gcvnyh.mov"
  );
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const titulopresteitRef = useRef(null);

  // Función para alternar el mute/desmute del video
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const titulopresteit = titulopresteitRef.current;
    const scrollTriggerContainer = document.querySelector(".home-container");

    gsap.registerPlugin(ScrollTrigger);

  
    gsap.to(titulopresteit, {
      scrollTrigger: {
        trigger: titulopresteit,
        start: "top bottom", // La animación comienza cuando la parte superior del bloque de texto llega a la parte inferior de la vista
      },
      opacity: 1, // Cambia la opacidad a 1
      y: 0, // Cambia la posición vertical (y) a 0
      duration: 1.5, // Duración de la animación en segundos
    });
  }, []); 
  return (
    <div className="home-container">
      <div className="start-screen">
        <div className="start-content1">
          
          <div
           
            className="titulopresteit"
          >
            <span>Press Kit Booking</span>
          </div><SliderSection /> 
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="background-video"
          >
            <source src={currentBackgroundVideo} type="video/mp4" />
            Tu navegador no admite el elemento de videos.
          </video>
          <button className="button-mute" onClick={toggleMute}>
            {isMuted ? "Activar Música" : "Silenciar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PresteitBukingSlider;







