import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./biografia.css";

const Biografia = () => {
  const [currentBackgroundVideoBiografia] = useState(
    "https://res.cloudinary.com/dvnhn35l4/video/upload/v1697501262/parabiografia_cprtlw.mp4"
  );
  const videoRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const description = descriptionRef.current;
    const scrollTriggerContainer = document.querySelector(".home-container");

    gsap.registerPlugin(ScrollTrigger);

    // Animación del bloque de texto al hacer scroll
    gsap.to(description, {
      scrollTrigger: {
        trigger: description,
        start: "top bottom", // La animación comienza cuando la parte superior del bloque de texto llega a la parte inferior de la vista
      },
      opacity: 1, // Cambia la opacidad a 1
      y: 0, // Cambia la posición vertical (y) a 0
      duration: 1.5, // Duración de la animación en segundos
    });
  }, []); // El array vacío significa que este efecto se ejecuta solo una vez, equivalente a componentDidMount

  return (
    <div className="home-container">
      <div className="start-screen">
        <div className="start-content">
          <div
            ref={descriptionRef}
            className="description"
            style={{ color: "white" }} // Establece el color del texto en blanco
          >
            <span style={{ color: "#fbbe3a" }}>living stereo</span> es una
            destacada productora de Argentina conformada por un talentoso equipo
            de productores musicales, incluyendo <span style={{ color: "#fbbe3a" }}>Agustín Bragoni, Joaquín
            Irigoyen, Nicolás Nieves y Simón Di Marzio</span>. Su enfoque es la
            creación de una identidad musical innovadora. Son versátiles en el
            escenario, ofreciendo <span style={{ color: "#fbbe3a" }}>sets B2B y un formato único llamado "Living
            Stereo" que combina guitarra, lap steel, sintetizador, batería y DJ
            set.</span> Han ganado reconocimiento tanto a nivel nacional como
            internacional, con sus producciones selladas bajo <span style={{ color: "#fbbe3a" }}>el sello "South
            America Avenue". </span> Además, han recibido apoyo de DJs destacados como
            Hernán Cattáneo. Además de ser productores, también están
            involucrados en la producción de eventos en lugares icónicos. En
            2023, <span style={{ color: "#fbbe3a" }}>crearon "Animala"</span>, un emocionante espacio para 500 personas
            que se ha destacado por su sonido innovador, puesta en escena y
            apoyo a artistas locales en crecimiento, generando un gran impacto
            en la escena musical.
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Biografia;
