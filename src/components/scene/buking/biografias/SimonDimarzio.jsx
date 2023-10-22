import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LivingBragoni from "./LivingBragoni";
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

            <div class="container2">
              <div class="row">
                <div class="column">
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697850814/agusbragoni/1_7_tdgjte.jpg"
                    alt="Imagen 1"
                  ></img>
                </div>
                <div class="column">
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697851232/agusbragoni/alemna_v6rqni.jpg"
                    alt="Imagen 2"
                  ></img>
                </div>
                <div class="column">
                  <img
                    src=" https://res.cloudinary.com/dvnhn35l4/image/upload/v1697849793/agusbragoni/259816088_492493538611125_1617444028955560743_n_zesqyp.jpg"
                    alt="Imagen 3"
                  ></img>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697849794/agusbragoni/276042996_252272707106578_8305766497880745516_n_hkyqt3.jpg"
                    alt="Imagen 4"
                  ></img>
                </div>
                <div class="column">
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697850814/agusbragoni/1_9_ixhipj.jpg"
                    alt="Imagen 5"
                  ></img>
                </div>
                <div class="column">
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697850801/agusbragoni/1_3_kwe0yk.jpg"
                    alt="Imagen 6"
                  ></img>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697850812/agusbragoni/1_5_v5sldy.jpg"
                    alt="Imagen 7"
                  ></img>
                </div>
                <div class="column">
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697849794/agusbragoni/258850834_648713199833873_412253203610088041_n_iq4ixd.jpg"
                    alt="Imagen 8"
                  ></img>
                </div>
                <div class="column">
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697850813/agusbragoni/1_6_ohzbo9.jpg"
                    alt="Imagen 9"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <LivingBragoni />
        </div>
      </div>
      <div className="text-block gallery__item">
        <h2 className="text-block__h_rider">RIDER TECNICO</h2>
        <div className="djset">
          <h4>Dj Set</h4>
        </div>
        <p className="text-block__p1">3 CDJ Nexus - Nexus 2 DJM 900 CDJ 2000</p>
        <div className="liveset">
          <h1>Live Set</h1>
        </div>
        <p className="text-block__p1">
          01 X MACBOOK PRO 13 01 X AKAI APC 01 X MINILOGUE 01 X FENDER MUSTANG
          01 X AMPLIFICADOR FENDER DELUXE 01 X INTERFAZ AUDIENT 01 X LAP STEEL
          GRETCHS - SALIDA STEREO 2 ENTRADAS - MICROFONO ( GUITARRA ELECTRICA)
        </p>
      </div>
      <div className="contacto">
        <h1>
          CONTACTO ELGHETTOPRODUCCiON@GMAiL.COM AGENT MANAGEMENT: LUCiO BURZOMi{" "}
          <br />
          TEL: 2215674139
        </h1>
      </div>
    </div>
  );
}

export default SimonDimarzio;
