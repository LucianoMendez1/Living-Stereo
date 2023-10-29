import React, { useState, useEffect } from "react";
import "./sellodiscografico.css";

const SelloDiscografico = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  // Función para pausar o reanudar la animación
  const toggleAnimation = () => {
    setIsAnimating((prevState) => !prevState);
  };

  // Control de la animación en función del estado de isAnimating
  useEffect(() => {
    const sello = document.querySelector(".sello");
    if (sello) {
      if (isAnimating) {
        sello.style.animationPlayState = "running";
      } else {
        sello.style.animationPlayState = "paused";
      }
    }
  }, [isAnimating]);

  return (
    <>
      <div className="selloTitle">
        <span>Sello Discografico</span>
      </div>

      <div className="sello-wrapper" onClick={toggleAnimation}>
        <div className="sello">
          <div className="sello-content">
            <img
              src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698534754/blackmove_ykmggo.png"
              alt=""
              className="sello-image"
            />
            <img
              src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698541660/artworks-CxYDB7leOc5VqVKq-6Lq3gg-t500x500_rxy7t4.jpg"
              alt=""
              className="sello-image2"
            />
          {/*   <p className="sello-text">Living Stereo</p>
            <p className="sello-p">Black</p> */}
          </div>
        
          <div className="bio-sello-south">
          <span className="highlighted-text-sello"> South America Avenue</span>
          se complace en presentar su último lanzamiento,
            dando una cálida bienvenida a <span className="highlighted-text">Nicolas Nieves, Agustin Bragoni y
            Simon Di Mazio </span>al sello con su excepcional EP original de tres
            pistas titulado "River Coast". Este cautivador EP también incluye
            las canciones "Dirty Pool" y "Other Side". Procedentes de Buenos
            Aires, Argentina, estos tres talentosos productores aportan sus
            perspectivas musicales únicas, mostrando la rica creatividad y el
            vibrante sonido de la escena local
           
          </div>
        </div>
      </div>
    </>
  );
};

export default SelloDiscografico;