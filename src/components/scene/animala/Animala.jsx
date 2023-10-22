import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./animala.css";

const Animala = React.forwardRef((props, ref) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const handleGlitchHover = () => {
    setIsGlitching(!isGlitching);
  };

  useEffect(() => {
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
            className={`glitch-text5 ${isGlitching ? "glitching" : ""}`}
            data-text="Animala"
            onMouseEnter={handleGlitchHover}
            onMouseLeave={handleGlitchHover}
          >
            Animala
          </h1>
          <div className="background-container">
            <img
              src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697951747/Animala/animala_db07d5.jpg" // Reemplaza con la URL de tu imagen de fondo
              alt="Fondo de pantalla"
              className="background-image" // Agrega una clase para estilos de CSS
            />
            <img
              src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697952044/Animala/Pngtree_tropical_leaves_border_frame_png_6412156_vqmzgz.png" // Reemplaza con la URL de tu imagen PNG
              alt="Recuadro PNG"
              className="png-image" // Agrega una clase para estilos de CSS
            />
          </div>
         
        </div>
      </div>
      <div ref={contentRef} className="content-below">
        {/* Elementos a continuación */}
      </div>
    </div>
  );
});

export default Animala;
