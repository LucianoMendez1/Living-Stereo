import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import isMobile from 'is-mobile';

import LivingSimon from "./LivingSimon";
import "./simondimarzio.css";
import SliderSection from "../SliderSection";
import Back from "../../navbar/Navbar";
function SimonDimarzio() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isMobileDevice = isMobile();

    if (!isMobileDevice) {
      gsap.fromTo(
        ".hero-section",
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: ".hero-section",
            start: "center center%", // Comienza la animación cuando el 80% superior del elemento está en la pantalla
            end: "top 50%",  // Finaliza la animación cuando el 20% superior del elemento está en la pantalla
            scrub: true,
          },
        }
      );

      const itemsL = document.querySelectorAll(".gallery__left .gallery__item");
      itemsL.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -50 * (index + 1) },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "center center",
              scrub: true,
            },
          }
        );
      });

      const itemsR = document.querySelectorAll(".gallery__right .gallery__item");
      itemsR.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: 50 * (index + 1) },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "center center",
              scrub: true,
            },
          }
        );
      });

      const textBlocks = document.querySelectorAll(".text-block");
      textBlocks.forEach((textBlock) => {
        gsap.fromTo(
          textBlock,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: textBlock,
              start: "top 80%",
              end: "center bottom",
              scrub: true,
            },
          }
        );
      });
    }

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
  }, []);

  return (
    <div className="wrapper">
        <Back/>
      <video
        data-speed=".6"
        className="background-video5"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1697501262/parabiografia_cprtlw.mp4"
          type="video/mp4"
        />
        Tu navegador no admite el elemento de videos.
      </video>
      <div className="content">
        <header className="hero-section">
          <img
            data-speed=".6"
            className="hero"
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697939335/SimonlivingStereo/IMG_8760_k3oepw.jpg"
            alt="img2"
          />
          <div className="container">
            <div data-speed=".75" className="main-header">
              <h1 className="main-title">Simon Dimarzio</h1>
            </div>
          </div>
        </header>
        <div className="portfolio">
          <div className="container">
            <div className="gallery">
              <div data-speed=".9" className="gallery__left">
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698192529/8-DSC05676_mwbqtx_sgtzzy.png"
                  alt="img 1"
                />

                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    hasta hoy ha compartido cabina con reconocidos djs 
                   
                  </h2>
                  <p className="text-block__p"> Mariano Mellino, Soundexile, Nick Varón , Emi Galvan, Einmusik, Budakid,
                    D-Formation, Kolombo, Fran Bortolossi, Kevin di Serna,
                    Antrim, John Cosani, Folgar,Analog Jungs, Nim, Belu Clavero, Valdovinos,
                    Joan Retamero,Eze Ramírez, entre otros.</p>
                </div>
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697941201/SimonlivingStereo/DSC01761_p0lbu8.jpg"
                  alt="img 3"
                />

                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                  Identidad Musical
                   
                  </h2>
                  <p className="text-block__p"> Se siente identificado con el Progressive House, Deep House
                    y Organic House.</p>
                </div>
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697939318/SimonlivingStereo/FF1F4B0A-1771-4A96-97F6-AA5CFA2D4DA0_hqelk0.jpg"
                  alt="img ultima "
                />
              </div>
              <div data-speed="1.1" className="gallery__right">
                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    Simon di Marzio es un DJ oriundo de la ciudad de La Plata.
                    
                  </h2>
                  <p className="text-block__p">Comenzó su carrera hace 6 años inspirado en The Chemical
                    Brothers, Jean-Michel Jarre, Sasha y Hernan Cattaneo</p>
                </div>
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697939328/SimonlivingStereo/IMG_7132_evpp2z.jpg"
                  alt="img2"
                />
                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                  Su Trayectoria en los Clubes
                    
                  </h2>
                  <p className="text-block__p">Se desempeñó en distintos clubes como The bow, Bahrein, Iconic Club,
                    Zegre; así como también en ciclos como Rio Electronic Music,
                    Hipico PM, Bodega Bonfati Mendoza, Parador Serena Mar del
                    Plata</p>
                </div>
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697941204/SimonlivingStereo/DSC01766_qk5ekt.jpg"
                  alt="img4"
                />

                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    Sus sets se destacan por contener transiciones largas y
                    sonidos armónicos para crear atmósferas que cautivan al
                    público
                  </h2>
                  <p className="text-block__p"> A la fecha, se encuentra dando sus primeros pasos
                    como productor musical teniendo feedbacks positivos de
                    grandes exponentes del género ademas recibio support de Hernán Cattaneo en su Podcasts semanal Resident</p>
                </div>
              </div>
            </div>
          </div>
          <LivingSimon />
          <div className="redes">
            <div className="redes">
              <h1>Escuchalo en sus redes</h1>
            
            </div>
            
          </div>
        </div>
        <div className="redes-icons">
                <a
                  href="https://soundcloud.com/simondimarzio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110274/soundcloud_sj9krx.png"
                    alt="SoundCloud"
                    className="small-image"
                  />
                </a>
                <a
                  href="https://open.spotify.com/artist/0k3Tv7xYk2S3cgnUsUwiu2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110079/spotify_hl3rka.png"
                    alt="Spotify"
                    className="small-image"
                  />
                </a>
                <a
                  href="https://www.instagram.com/simondimarzio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110078/instagram_pmiidc.png"
                    alt="Insta"
                    className="small-image"
                  />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=C3eUu7bo3hw&ab_channel=SouthAmericaAvenue"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110077/youtube_tuqwvh.png"
                    alt="YouTube"
                    className="small-image"
                  />
                </a>
              </div>
              <div className="container-raider">
        <h2 className="container-raider__title">Técnico Rider</h2>
        <div className="djset">
          <h4>DJ Set</h4>
        </div>
        <p className="liveset-description">Mixer 900nx2 - 3cdj 2000nx -cdj 3000- mixer v10</p>
        <div className="liveset">
          <h1>Live Set</h1>
        </div>
        <p className="container-raider__content">
          01 MacBook Pro 13 - 01 Akai APC - 01 Minilogue - 01 Fender Mustang 01
          Fender Deluxe Amplificador - 01 Audient Interfaz - 01 Lap Steel
          Gretsch - Salida estéreo, 2 entradas - Micrófono 
        </p>
      </div>

      <div className="contacto">
        <h1>Conctacto</h1>
        <p className="contacto-description">
          ELGHETTOPRODUCCiON@GMAiL.COM AGENT MANAGEMENT: LUCiOBURZOMi
          
          TEL: 2215674139
        </p>
      </div>
      <div className="artistaslider"><h1>Artistas</h1></div>
      <div className="sliderBiografias"><SliderSection/></div>
    </div>
      </div>
   
  );
}

export default SimonDimarzio;
