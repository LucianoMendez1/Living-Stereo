import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import isMobile from 'is-mobile';
import "./biografia.css";

const Biografia = () => {
  useEffect(() => {
    // Registra el plugin de ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Solo activar animaciones en pantallas más grandes
    if (!isMobile()) {
      // Animación para .bio-item
      gsap.fromTo(
        ".bio-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".bio-item",
            start: "top 80%",
            end: "center bottom",
            scrub: true,
          },
        }
      );

      // Puedes agregar más animaciones aquí si es necesario
    }
  }, []);

  return (
    <div className="bio-wrapper">
      <div className="bio-content">
        <div className="bio-portfolio">
          <div className="bio-container">
            <div className="bio-gallery">
              <div className="bio-item">
                <div className="bio-text">
                  <h2 className="bio-heading">
                    Living Stereo: El Equipo de Productores Musicales Destacados de Argentina
                    <div className="bio-p">
                      Conformada por un talentoso equipo de productores musicales,
                      incluyendo <br />
                      <span className="highlighted-text">Agustin Bragoni, Joaquin Irigoyen, Nicolas Nieves y Simon Di Marzio</span>
                    </div>
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
                    className="bio-video2"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1699401093/SaveInsta.App_-_3231108036629867189_bdy1ah.mp4"
                  ></video>
                  <h2 className="bio-heading2">
                    "La Destacada Trayectoria Musical de Living Stereo y su Impacto en la Escena Musical"
                    <div className="bio-p2">
                      Su música ha obtenido reconocimiento nacional e internacional bajo el sello
                      <span className="highlighted-text">South America Avenue </span>
                      respaldada por DJs destacados, como
                      <span className="highlighted-text"> Hernán Cattáneo. </span> Además de su producción musical.
                    </div>
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
