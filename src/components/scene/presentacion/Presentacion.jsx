import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./presentacion.css";

const Presentacion = React.forwardRef((props, ref) => {
  const [currentBackgroundVideo] = useState(
    "https://res.cloudinary.com/dvnhn35l4/video/upload/v1696907149/ProyectAgustin/2_gtnfou.mp4"
  );
  const [isMuted, setIsMuted] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const audioRef = useRef(null);

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

  const handleGlitchHover = () => {
    setIsGlitching(!isGlitching);
  };

  useEffect(() => {
    const video = videoRef.current;
    const scrollTriggerContainer = document.querySelector(".home-container");

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".glitch-text", {
      scrollTrigger: {
        trigger: scrollTriggerContainer,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      scaleX: 1.1,
      scaleY: 0.9,
    });

    gsap.from(".description", {
      scrollTrigger: {
        trigger: ".description",
        start: "top bottom",
      },
      opacity: 0,
      y: 20,
    });

    const titleText = document.querySelector(".glitch-text");
    const titleTextContent = titleText.getAttribute("data-text");

    const glitchTL = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });

    glitchTL.to(titleText, {
      duration: 0.1,
      text: {
        value: titleTextContent,
        delimiter: "",
      },
      ease: "none",
    });

    glitchTL.to(titleText, {
      duration: 0.2,
      text: {
        value: function () {
          return titleTextContent
            .split("")
            .map(() => (Math.random() < 0.5 ? "█" : " "));
        },
        delimiter: "",
      },
      ease: "none",
    });
  }, []);

  return (
    <div className="home-container" ref={ref}>
      <div className="start-screen">
        <div className="start-content">
          <h1
            className={`glitch-text ${isGlitching ? "glitching" : ""}`}
            onMouseEnter={handleGlitchHover}
            onMouseLeave={handleGlitchHover}
          >
            Living Stereo
          </h1>
          <div className="arrow bounce">
              <img src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png" width="100"/>
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
