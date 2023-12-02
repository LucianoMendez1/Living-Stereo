import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import isMobile from 'is-mobile';
import "./biografia.css";

const Biografia = () => {
 
  return (
    <div className="bio-wrapper">

      <div className="box_biography">
          <div className="text_biography">
            <h2>El Equipo de Productores Musicales mas Destacados de Argentina.</h2>
            <p>
                Conformada por un talentoso equipo de productores musicales,incluyendo, 
                <span> Agustin Bragoni, Joaquin Irigoyen, Nicolas Nieves y Simon Di Marzio.</span>
            </p>
          </div>

          <div className="video_biography">
              <video
                  className="bio-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1697501262/parabiografia_cprtlw.mp4"
                />
          </div>
      </div>


      <div className="box_biography box_biography_video">
        
          <div className="video_biography video_biography_s2">
              <video
                  className="bio-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1697590961/SaveInsta.App_-_2804920139101996759_1272469279_puozka.mp4"
                />
          </div>

          <div className="text_biography text_biography_s2">
            <h2>"La Destacada Trayectoria Musical de Living Stereo y su Impacto en la Escena Musical"</h2>
            <p>
                Su música ha obtenido reconocimiento nacional e internacional bajo el sello
                  <span> South America Avenue </span>
                  respaldada por DJs destacados, como
                  <span > Hernán Cattáneo. </span> Además de su producción musical.
            </p>
          </div>
      </div>

      <div className="box_text_biography">
        <h2>La destacada trayectoria musical de living stereo.</h2>
        <p>
            Su música ha obtenido reconocimiento nacional e internacional bajo el sello
            <span > South America Avenue </span>
            respaldada por DJs destacados, como
            <span > Hernán Cattáneo. </span> Además de su producción musical.
        </p>
      </div>
     
    </div>
  );
};

export default Biografia;

