import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./biografia.css";

const Biografia = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animaciones para los elementos de texto
    const textBlocks = document.querySelectorAll(".bio-text");
    textBlocks.forEach((textBlock) => {
      gsap.fromTo(
        textBlock,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: textBlock,
            start: "top 80%",
            end: "center bottom",
            scrub: true,
          },
        }
      );
    });

    const videos = document.querySelectorAll(".bio-video");
    videos.forEach((video) => {
      gsap.fromTo(
        video,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: video,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
    });
  }, []);

  gsap.fromTo(
    ".section2",
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        trigger: ".section2",
        start: "top center",
        end: "center center",
        scrub: true,
      },
    }
  );

  return (
    <div className="bio-wrapper">
      <div className="bio-content">
        <div className="bio-portfolio">
          <div className="bio-container">
            <div className="bio-gallery">
              <div className="bio-item">
                <div className="bio-text">
                  <h2 className="bio-heading">
                    Living stereo es una destacada productora de Argentina
                    conformada por un talentoso equipo de productores musicales,
                    incluyendo Agustín Bragoni, Joaquín Irigoyen, Nicolás Nieves
                    y Simón Di Marzio
                  </h2>
                </div>
                <video
                  className="bio-video"
                  autoPlay
                   loop
                muted
               playsInline
                  src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1697501262/parabiografia_cprtlw.mp4"
                ></video>
              </div>
              <div className="bio-item">
                <div className="bio-text">
                  <video
                    className="bio-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1696907204/ProyectAgustin/4_uisfb1.mp4"
                  ></video>
                  <h2 className="bio-heading2">
                    Su música ha obtenido reconocimiento nacional e
                    internacional bajo el sello "South America Avenue",
                    respaldada por DJs destacados, como Hernán Cattáneo. Además
                    de su producción musical, crearon "Animala" en 2023, un
                    emocionante espacio para 500 personas que se ha destacado
                    por su sonido innovador, puesta en escena y apoyo a artistas
                    locales en crecimiento, generando un gran impacto en la
                    escena musical.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biografia;
