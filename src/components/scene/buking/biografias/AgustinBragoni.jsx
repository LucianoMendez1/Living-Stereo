import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./agustinbragoni.css";
import LivingBragoni from "./LivingBragoni";

function AgustinBragoni() {
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
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697749878/Agustin_Bragoni_-_Chacra_el_Descanso_2_wv4ttr.jpg"
            alt="Alt"
          />
          <div className="container">
            <div data-speed=".75" className="main-header">
              <h1 className="main-title">Agustin Bragoni</h1>
            </div>
          </div>
        </header>
        <div className="portfolio">
          <div className="container">
            <div className="gallery">
              <div data-speed=".9" className="gallery__left">
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697749878/Agustin_Bragoni_-_Chacra_el_Descanso_oyat3i.jpg"
                  alt="Alt"
                />

                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    A LO LARGO DE SU CARRERA HA LOGRADO TOCAR EN LOS ES-
                    CENARiOS MAS RECONOCiDOS DE ARGENTiNA, COMO EL LOO-
                    LLAPALOOZA, LUNA PARK, COSQUiN ROCK, ESTADiO MALViNAS
                    ARGENTiNAS, ENTRE OTROS
                  </h2>
                  <p className="text-block__p"></p>
                </div>
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697754573/Agus_Chano_-_Luna_Park_wfhjea.jpg"
                  alt="Alt"
                />

                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    POR SU PARTE ES PRODUCTOR MUSiCAL Y DJ RESiDENTE DE ICONiC
                    CLUB, HA COMPARTiDO CABiNA CON LOS DJS MÁS iM- PORTANTES DE
                    LA ESCENA ARGENTiNA, COMO MARiANO MELLiNO, JUAN HANSEN,
                    SOUNDEXiLE, EZEQUiEL ARiAS Y JONH COSANi ENTRE OTROS.
                    ALGUNAS DE SUS FECHAS MÁS DESTACADAS HAN SiDO JUNTO A AL DJ
                    iNTERNA- CiONAL CiD INC EN ESTADiO UNO (CLUB ESTUDiANTES) Y
                    JUNTO AL ALEMÁN EiNMUSiK EN ICONIC CLUB.
                  </h2>
                  <p className="text-block__p"></p>
                </div>
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697755160/Agustin_Bragoni_2_nmghmd.jpg"
                  alt="Alt"
                />
              </div>
              <div data-speed="1.1" className="gallery__right">
                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    AGUSTIN BRAGONi, ES UN MUSiCO PRODUCTOR, QUE DEDiCÓ TODA SU
                    ViDA A LA MÚSiCA DESDE LOS 5 AÑOS. ACTUALMENTE SE DESEMPEÑA
                    EN LA ELECTRÓNiCA (PROGRESSiVE HOUSE, MELODiC TECHNO &
                    MELODiC HOUSE). CON SUS DOS FOR- MATOS, DJ SET Y LiVE SET,
                    TOCANDO iNSTRUMENTOS COMO LA GUiTARRA, SiNTETiZADORES Y LAP
                    STEEL.
                  </h2>
                  <p className="text-block__p"></p>
                </div>
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697749878/Agustin_Bragoni_-_Estadio_UNO_o3lsyx.jpg"
                  alt="Alt"
                />
                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    ASÍ MiSMO, ADEMÁS DE SU PROYECTO COMO DJ, ES PARTE DEL
                    EQUiPO DE PRODUCCiÓN Y MUSiCALiZACiÓN DE CHANO, UN EXPONENTE
                    DENTRO DE LA MÚSiCA.
                  </h2>
                  <p className="text-block__p"></p>
                </div>
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697749878/Agustin_Bragoni_-_Estadio_UNO_3_akmaxf.jpg"
                  alt="Alt"
                />

                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    EN LOS ÚLTiMOS TiEMPOS, HA TENiDO LA OPORTUNiDAD DE
                    iNCURSiONAR DENTRO DEL GÉNERO HOUSE, COMPARTiENDO CABiNA CON
                    KOLOMBO Y EL BRiTÁNiCO NiC FANCiULLi, DE- MOSTRANDO ASi SU
                    VERSATiLiDAD DENTRO LA ESCENA ELEC- TRÓNiCA
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
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697850814/agusbragoni/1_8_lgcr6g.jpg"
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

      <div>
        <div className="redes1">
          <h1>Escuchalo en sus redes</h1>
        </div>
      </div>
      <div className="redes-icons">
        <a
          href="https://soundcloud.com/agusbragoni/agustin-bragoni-live-ft-simon-di-marzio"
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
          href="https://open.spotify.com/artist/1cULybzKerkCYILQ7HE6KV"
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
          href="https://www.instagram.com/agusbragoni/"
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
          href="https://www.youtube.com/channel/UCiJDFbELenl7792FyRxlGyQ"
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
        <p className="liveset-description">3 CDJ Nexus - Nexus 2 DJM 900 CDJ 2000</p>
        <div className="liveset">
          <h1>Live Set</h1>
        </div>
        <p className="container-raider__content">
          01 MacBook Pro 13 - 01 Akai APC - 01 Minilogue - 01 Fender Mustang 01
          Fender Deluxe Amplificador - 01 Audient Interfaz - 01 Lap Steel
          Gretsch - Salida estéreo, 2 entradas - Micrófono (Guitarra Eléctrica)
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

export default AgustinBragoni;
