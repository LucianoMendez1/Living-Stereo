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
