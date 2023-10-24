import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./presentacion.css";

const Presentacion = React.forwardRef((props, ref) => {
  const [currentBackgroundVideo] = useState(
    "https://res.cloudinary.com/dvnhn35l4/video/upload/v1696907149/ProyectAgustin/2_gtnfou.mp4"
  );
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const contentRef = useRef(null); // Agregar esta línea

  const toggleMute = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsMuted(false);
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  const playVinylAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsMuted(true); // Silencia el video cuando se reproduce la música del vinilo.
    }
  };

  // Función para detener el audio del vinilo
  const stopVinylAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsMuted(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const scrollTriggerContainer = document.querySelector(".home-container");

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".description", {
      scrollTrigger: {
        trigger: ".description",
        start: "top bottom",
      },
      opacity: 0,
      y: 20,
    });
  }, []);

  return (
    <div className="home-container" ref={ref}>
      <div className="start-screen">
        <div className="start-content">
        <div className="titulopresent">
            <span>Living Stereo</span>
            </div>
          
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="background-video1"
          >
            <source src={currentBackgroundVideo} type="video/mp4" />
            Tu navegador no admite el elemento de video.
          </video>
          <button
            onClick={toggleMute}
            className={`vinyl-button1 ${isMuted ? "muted" : "unmuted"}`}
          >
            <img
              src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697857960/klipartz.com_1_tw5vrg.png"
              alt="Vinilo"
              className="vinyl-img1"
            />
          </button>
          <div className="arrow bounce">
              <img src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698168845/image_ghroqr.png" width="100"/>
          </div>
          <audio
            ref={audioRef}
            src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1698087033/Nicolas_Nieves_Agust%C3%ADn_Bragoni_Simon_Di_Marzio_-_Rivera_Paradise_South_America_Avenue_xbidwr.mp3"
            preload="auto"
          ></audio>
        </div>
      </div>
      <div ref={contentRef} className="content-below">
      </div>
    </div>
  );
});

export default Presentacion;
