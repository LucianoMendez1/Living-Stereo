import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import isMobile from 'is-mobile';

import "./b2b.css";
import B2BLiving from "./LivingB2B";
import Back from "../../navbar/Navbar";
import SliderSection from "../SliderSection";

function B2B() {
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
          src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1697590961/SaveInsta.App_-_2804920139101996759_1272469279_puozka.mp4"
          type="video/mp4"
        />
        Tu navegador no admite el elemento de videos.
      </video>
      <div className="content">
        <header className="hero-section">
          <img
            data-speed=".6"
            className="hero"
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699064833/IMG_3719_cwenly.jpg"
            alt="Alt"
          />
          <div className="container">
            <div data-speed=".75" className="main-header">
              <h1 className="main-title-b2b">
                {" "}
                Agustin Bragoni <br></br> Simon Di Marzio{" "}
              </h1>
              <h2 className="main-sustitle">
                B2B<span></span>
              </h2>
            </div>
          </div>
        </header>
        <div className="portfolio">
          <div className="container">
            <div className="gallery">
              <div data-speed=".9" className="gallery__left">
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071423/b2bAgusSimon/CB6AD92B-1BBF-46DA-8D21-92F6A3807A9C_poodip.jpg"
                  alt="img 1"
                />

                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    A LO LARGO DE SU CARRERA HA LOGRADO TOCAR EN LOS ES-
                    CENARiOS MAS RECONOCiDOS DE ARGENTiNA
                  </h2>
                  <p className="text-block__p">
                    COMO EL LOO- LLAPALOOZA, LUNA PARK, COSQUiN ROCK, ESTADiO
                    MALViNAS ARGENTiNAS, ENTRE OTROS
                  </p>
                </div>
                <img
                  className="gallery__item"
                
                  src="  https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071443/b2bAgusSimon/IMG_3718_1_tqk5x3.jpg"
                  alt="img 3 "
                />

                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    POR SU PARTE ES PRODUCTOR MUSiCAL Y DJ RESiDENTE DE ICONiC
                    CLUB
                  </h2>
                  <p className="text-block__p">
                    EN LOS ÚLTiMOS TiEMPOS, HA TENiDO LA OPORTUNiDAD DE
                    iNCURSiONAR DENTRO DEL GÉNERO HOUSE
                  </p>
                </div>
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071424/b2bAgusSimon/D870221E-7541-4B81-A3CE-79E1D58BC806_1_x3ztns.jpg"
                  alt="img 5"
                />
              </div>
              <div data-speed="1.1" className="gallery__right">
                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    AGUSTIN BRAGONi Y SIMON DI MARZIO
                  </h2>
                  <p className="text-block__p">
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor nulla dolore sunt. Animi enim veritatis ducimus rem
                    repellat omnis quia ea magnam autem quidem. Rem voluptates
                    odio ad at dolores! TOCANDO iNSTRUMENTOS COMO LA GUiTARRA,
                    SiNTETiZADORES Y LAP STEEL.
                  </p>
                </div>
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071417/b2bAgusSimon/651c4a28-b78c-40c5-905b-a1d18220e3d4_wojmgp.jpg"
                  alt="imagen 2"
                />
                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    ASÍ MiSMO, ADEMÁS DE SU PROYECTO COMO DJ
                  </h2>
                  <p className="text-block__p">
                    ES PARTE DEL EQUiPO DE PRODUCCiÓN Y MUSiCALiZACiÓN DE CHANO,
                    UN EXPONENTE DENTRO DE LA MÚSiCA.
                  </p>
                </div>
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071425/b2bAgusSimon/f7b52ae3-ad22-4702-999b-35610a63c349_tprk0m.jpg"
                  alt="img 4"
                />

                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    Compartio CABiNA CON LOS DJS MÁS iMPORTANTES DE LA ESCENA
                    ARGENTiNA,
                  </h2>
                  <p className="text-block__p">
                    {" "}
                    COMPARTiENDO CABiNA CON KOLOMBO , MARiANO MELLiNO ,NiC
                    FANCiULLi,JUAN HANSEN, SOUNDEXiLE, EZEQUiEL ARiAS Y JONH
                    COSANi ENTRE OTROS. DESMOSTRANDO ASi SU VERSATiLiDAD DENTRO
                    LA ESCENA ELECTRÓNiCA.
                    <br />
                    ALGUNAS DE SUS FECHAS MÁS DESTACADAS HAN SiDO JUNTO A AL DJ
                    iNTERNA- CiONAL CiD INC EN ESTADiO UNO (CLUB ESTUDiANTES) Y
                    JUNTO AL ALEMÁN EiNMUSiK EN ICONIC CLUB
                  </p>
                </div>
              </div>
            </div>

            <div class="containerb2b">
              <div class="row">
                <div class="column">
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071410/b2bAgusSimon/IMG_3821_itd6bm.jpg"
                    alt="Imagen 1"
                  ></img>
                </div>
                <div class="column">
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071414/b2bAgusSimon/334D01E5-A3E6-4E36-AA33-A5935B7AE6A8_euk7ht.jpg"
                    alt="Imagen 2"
                  ></img>
                </div>
                <div class="column">
                  <img
                    src=" https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071411/b2bAgusSimon/3C0A8548-AD71-4D67-900B-6262E578A8EC_sdlvgm.jpg"
                    alt="Imagen 3"
                  ></img>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071424/b2bAgusSimon/E599386D-D21E-4F70-94B2-3E19BC5A18CE_zkq4sd.jpg"
                    alt="Imagen 4"
                  ></img>
                </div>
                <div class="column">
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071410/b2bAgusSimon/IMG_3816_s7wcmc.jpg"
                    alt="Imagen 5"
                  ></img>
                </div>
                <div class="column">
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071422/b2bAgusSimon/C7B7E1B4-D282-43DA-BD6D-ADCF9978C48E_lxwu6s.jpg"
                    alt="Imagen 6"
                  ></img>
                </div>
              </div>
              <div class="row">
                <div class="column">
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071426/b2bAgusSimon/E6949356-DCC1-49F5-BA17-12197B511936_rusjdr.jpg"
                    alt="Imagen 7"
                  ></img>
                </div>
                <div class="column">
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071422/b2bAgusSimon/BF2ACF18-0916-44D5-A4E4-40779D80C37E_nvsxu3.jpg"
                    alt="Imagen 8"
                  ></img>
                </div>
                <div class="column">
                  <img
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071412/b2bAgusSimon/7AF95CCB-4B62-4CD7-A67A-0161BD79BCA0_rwakhb.jpg"
                    alt="Imagen 9"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <B2BLiving />
        </div>
      </div>

     
      
      <div className="container-raider">
        <h2 className="container-raider__title">Técnico Rider</h2>
        <div className="djset">
          <h4>DJ Set</h4>
        </div>
        <p className="liveset-description">
          3 CDJ Nexus - Nexus 2 DJM 900 CDJ 2000
        </p>
        <div className="liveset">
          <h1>Live Set</h1>
        </div>
        <p className="container-raider__content">
          01 MacBook Pro 13 - 01 Akai APC - 01 Minilogue - 01 Fender Mustang 01
          Fender Deluxe Amplificador - 01 Audient Interfaz - 01 Lap Steel
          Gretsch - Salida estéreo, 2 entradas - Micrófono (Guitarra Eléctrica)
        </p>
      </div>


     
      <div className="artistasb2b"><h1>Artistas</h1></div>
      <div className="sliderBiografias"><SliderSection/></div>
    </div>
   
  );
}

export default B2B;
