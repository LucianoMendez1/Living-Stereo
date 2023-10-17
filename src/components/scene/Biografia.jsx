import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./biografia.css";

const Biografia = () => {
  const [currentBackgroundVideo] = useState(
    "https://res.cloudinary.com/dvnhn35l4/video/upload/v1697501262/parabiografia_cprtlw.mp4"
  );
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const descriptionRef = useRef(null);

  // Función para alternar el mute/desmute del video
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

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
            className="description">
            living stereo es una vibrante productora de argentina,
              compuesta por un talentoso equipo de productores musicales:
              agustin bragoni, joaquin irigoyen, nicolas nieves y simon di
              marzio que tienen como objetivo generar una nueva identidad
              musical a través de sonidos innovadores.
              versatilidad en el escenario
              cuentan con una variedad de formatos para sus presentaciones
              en vivo. esto incluye sets b2b como agustin bragoni b2b simon di
              marzio, agustin bragoni b2b nicolas nieves y simon di marzio b2b
              nicolas nieves.
              living stereo 
              paralelamente ofrecen una experiencia única con su formato
              "living stereo" que combina guitarra, lap steel,
              synthesizer, drums y dj set en un espectáculo impresionante y
              enérgico.
              recorrido en la escena musical:
              reconocimiento nacional e internacional.
              sus tres primeras producciones recibieron una cálida
              respuesta de dj’s tanto a nivel nacional como internacional,
              siendo sellados bajo el label south america avenue.
              support de djs destacados
              han tenido el honor de recibir el apoyo de destacados djs
              como hernan cattaneo en su redisent 645 (galactic original
              mix)
              así como nick varon, kevin di serna, paul deep, soundexile, emi
              galvan, entre otros en sus producciones.
              producción de eventos:
              iconic club como djs residentes y productores*
              secret location como djs residentes y co-productores*
              animala como productores y djs residentes.*
              en 2023, dieron vida a "animala", un emocionante espacio con
              capacidad para 500 personas que ha ido creciendo
              constantemente desde su creación. "animala" ha sido
              reconocido por su sonido innovador, puesta en escena y
              apoyo a artistas locales en crecimiento generando un gran
              impacto en la escena musical.
          </div>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="background-video"
          >
            <source src={currentBackgroundVideo} type="video/mp4" />
            Tu navegador no admite el elemento de video.
          </video>
          <button className="button-mute" onClick={toggleMute}>
            {isMuted ? "Activar Música" : "Silenciar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Biografia;
