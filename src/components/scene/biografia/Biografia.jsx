import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import isMobile from 'is-mobile';
import "./biografia.css";

const Biografia = () => {

  return (
    <div className="bio-wrapper" id="biography">

      <div className="box_biography">
          <div className="text_biography">
            <h2>Un Equipo de djs y productores de Argentina.</h2>
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
            Su música ha obtenido el reconocimiento nacional e internacional contando con el Support DJs como 
                  <span> Hernan Cattaneo, Kevin Di Serna, Paul Deep y Lopezhouse. </span>
            </p>
          </div>
      </div>

      <div className="box_text_biography">
        <h2> reconocimiento nacional e internacional </h2>
        <p>
       Sus Producciones han sido selladas por sellos como 
       <span> 3erd Avenue </span>
        y
       <br/>
        <span >South America Avenue </span>
        
        </p>
      </div>
     
    </div>
  );
};

export default Biografia;

