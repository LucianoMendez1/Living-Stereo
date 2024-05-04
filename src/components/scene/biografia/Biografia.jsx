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
              Marzio. <br />{" "}
            </span>{" "}
            Con una sólida base en producción musical,Living Stereo sigue
            desarrollando su marca a través de{" "}
            <span>
              {" "}
              sus presentaciones en vivo las cuales se destacan por ser
              íntegramente con música propia
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
            Durante sus presentaciones, <span>fusionan Dj Sets </span> con
            elementos en vivo como sintetizadores, guitars, lap steel, voces y
            percusión electrónica. Actualmente{" "}
            <span>Living Stereo ofrece dos formatos de actuación </span>en vivo:
            dj set y live band con sintetizadores guitarra y voces en vivo en
            los cuales. Ambos formatos se destacan por ser íntegramente con
            música producida por ellos.
            {/*   <span>
              {" "}
              exploran géneros como progressive house, deep house y techno.
            </span> */}
          </p>
        </div>
      </div>

      <div className="box_text_biography">
        <h2> reconocimiento nacional e internacional </h2>
        <p>
          Sus Producciones han sido selladas por labels como
          
          <div className="redes-icons_biografia">
          
            <span> 3erd Avenue </span>
            <a
              href="https://www.instagram.com/3rdavenuelabel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110078/instagram_pmiidc.png"
                alt="Instagram"
                className="small-image"
              />
            </a>
            <a
              href="https://soundcloud.com/3rdavenue"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110274/soundcloud_sj9krx.png"
                alt="SoundCloud"
                className="small-image"
              />
            </a>
          </div>
        
          <div className="redes-icons_biografia">
           
            <span>One of a kind</span>
            <a
              href="https://www.instagram.com/oneofakindmuzik/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110078/instagram_pmiidc.png"
                alt="Instagram"
                className="small-image"
              />
            </a>
            <a
              href="https://soundcloud.com/oneofakindmuzik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110274/soundcloud_sj9krx.png"
                alt="SoundCloud"
                className="small-image"
              />
            </a>
          </div>
      
          <div className="redes-icons_biografia">
          
            <span>La perle record</span>
            <a
              href="https://www.instagram.com/laperlerecords/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110078/instagram_pmiidc.png"
                alt="Instagram"
                className="small-image"
              />
            </a>
            <a
              href="https://soundcloud.com/laperlerecords"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110274/soundcloud_sj9krx.png"
                alt="SoundCloud"
                className="small-image"
              />
            </a>
          </div>
          
          <div className="redes-icons_biografia">
          
            <span> Massive harmony records </span>
            <a
              href="https://www.instagram.com/massiveharmony/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110078/instagram_pmiidc.png"
                alt="Instagram"
                className="small-image"
              />
            </a>
            <a
              href="https://soundcloud.com/massiveharmony"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110274/soundcloud_sj9krx.png"
                alt="SoundCloud"
                className="small-image"
              />
            </a>
          </div>
          
          <div className="redes-icons_biografia">
           
            <span>Dopamine white</span>
            <a
              href="https://www.instagram.com/dopamine_music"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110078/instagram_pmiidc.png"
                alt=""
                className="small-image"
              />
            </a>
            <a
              href="https://soundcloud.com/dopamine-music"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110274/soundcloud_sj9krx.png"
                alt="SoundCloud"
                className="small-image"
              />
            </a>
          </div>
      
          <div className="redes-icons_biografia">
          
            <span>South America Avenue </span>
            <a
              href="https://www.instagram.com/southamericaavenue/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110078/instagram_pmiidc.png"
                alt="Instagram"
                className="small-image"
              />
            </a>
            <a
              href="https://soundcloud.com/southamericaavenue"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110274/soundcloud_sj9krx.png"
                alt="SoundCloud"
                className="small-image"
              />
            </a>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Biografia;
