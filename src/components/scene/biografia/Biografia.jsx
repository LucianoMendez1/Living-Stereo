import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import isMobile from "is-mobile";
import "./biografia.css";

const Biografia = () => {
  return (
    <div className="bio-wrapper" id="biography">
      <div className="box_biography">
        <div className="text_biography">
          <h2>Living Stereo es una banda de música electrónica </h2>
          <p>
            Conformada por cuatro integrantes productores musicales y DJs.
            <span>
              {" "}
              Agustin Bragoni, Joaquin Irigoyen, Nicolas Nieves y Simon Di
              Marzio.
            </span>
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
          <h2>
            "La Destacada Trayectoria Musical de Living Stereo y su Impacto en
            la Escena Musical"
          </h2>
          <p>
            Durante sus presentaciones, <span>fusionan Dj Sets </span> con elementos en
            vivo como sintetizadores,  guitars, lap steel, voces y percusión
            electrónica. Actualmente <span>Living Stereo ofrece dos formatos de
            actuación </span>en vivo,en los cuales<span> exploran géneros como progressive
            house, deep house y techno.</span> 
          </p>
        </div>
      </div>

      <div className="box_text_biography">
        <h2> reconocimiento nacional e internacional </h2>
        <p>
          Sus Producciones han sido selladas por labels como
          <br/>
          <span> 3erd Avenue </span> 
          <br/>
          <span>One of a kind</span>
          <br/>
          <span>La perle record</span>
           <br/>
           <span>Massive harmony records </span>
            <br/>
            <span>Dopamine white</span>
          <br />
          <span>South America Avenue </span>
        </p>
      </div>
    </div>
  );
};

export default Biografia;
