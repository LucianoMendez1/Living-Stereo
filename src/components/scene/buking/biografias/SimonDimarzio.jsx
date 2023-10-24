import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LivingSimon from "./LivingSimon";
import "./simondimarzio.css";
function SimonDimarzio() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".hero-section",
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "center center",
          end: "center center",
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

    // Animaciones para los elementos de texto
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
    <div className="wrapper">
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
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697939320/SimonlivingStereo/DSC08341_wbthfs.jpg"
                  alt="img 1"
                />

                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    hasta hoy ha compartido cabina con reconocidos djs como
                    Mariano Mellino, Soundexile, Emi Galvan, Einmusik, Budakid,
                    D-Formation, Kolombo, Fran Bortolossi, Kevin di Serna,
                    Antrim, John Cosani, Folgar, Nim, Belu Clavero, Valdovinos,
                    Joan Retamero, entre otros.
                  </h2>
                  <p className="text-block__p"></p>
                </div>
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697939325/SimonlivingStereo/DSC02377_yojsbm.jpg"
                  alt="img 3"
                />

                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    Se siente identificado con el Progressive House, Deep House
                    y Organic House.
                  </h2>
                  <p className="text-block__p"></p>
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
                    Comenzó su carrera hace 6 años inspirado en The Chemical
                    Brothers, Jean-Michel Jarre, Sasha y Hernan Cattaneo
                  </h2>
                  <p className="text-block__p"></p>
                </div>
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697939328/SimonlivingStereo/IMG_7132_evpp2z.jpg"
                  alt="img2"
                />
                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    Se desempeñó en distintos clubes como Bahrein, Iconic Club,
                    Zegre; así como también en ciclos como Rio Electronic Music,
                    Hipico PM, Bodega Bonfati (Mendoza), Parador Serena (Mar del
                    Plata)
                  </h2>
                  <p className="text-block__p"></p>
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
                    público. A la fecha, se encuentra dando sus primeros pasos
                    como productor musical teniendo feedbacks positivos de
                    grandes exponentes del género.
                  </h2>
                  <p className="text-block__p"></p>
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
      </div>
    </div>
  );
}

export default SimonDimarzio;