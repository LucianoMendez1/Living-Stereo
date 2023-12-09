import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import isMobile from 'is-mobile';
import SliderSection from "../../SliderSection";
import Back from "../../../navbar/Navbar";
import "./nicolas.css";

function NicolasNieves() {
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

      const animateItems = (items, direction) => {
        items.forEach((item, index) => {
          gsap.fromTo(
            item,
            { opacity: 0, x: direction * 50 * (index + 1) },
            {
              opacity: 1,
              x: 0,
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "center center",
                scrub: true,
                onEnter: () => item.classList.add("pinned"),
                onLeaveBack: () => item.classList.remove("pinned"),
              },
            }
          );
        });
      };

      const itemsL = document.querySelectorAll(".gallery__left .gallery__item");
      animateItems(itemsL, -1); // Animación hacia la izquierda (-1)

      const itemsR = document.querySelectorAll(".gallery__right .gallery__item");
      animateItems(itemsR, 1); // Animación hacia la derecha (1)

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
     {/*  <video
        data-speed=".6"
        className="background-video5"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1698272834/NicoLivingStereo/IMG_2936_sl9c86.mp4"
          type="video/mp4"
        />
        Tu navegador no admite el elemento de videos.
      </video> */}
      <div className="content">
        <header className="hero-section">
          <img
            data-speed=".6"
            className="hero"
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698269513/NicoLivingStereo/IMG_6275_vahtzr.jpg"
            alt="img2"
          />
          <div className="container">
            <div data-speed=".75" className="main-header">
              <h1 className="main-title">Nicolas Nieves</h1>
            </div>
          </div>
        </header>
        <div className="portfolio">
          <div className="container">
            <div className="gallery">
              <div data-speed=".9" className="gallery__left">
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699668791/NicoLivingStereo/Copia_de_NGR04472_m5vuby_1_sqjsdk.jpg"
                  alt="img 1"
                />

                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    Comienzo de Su carrera
                   
                  </h2>
                  <p className="text-block__p"> En el año 2017, Nicolas comenzó su carrera como DJ,
                    fusionando sus diversas influencias en sets de larga
                    duración. Sus mezclas se destacan por su enfoque en sonidos
                    grooveros, hipnóticos y voladores, creando así una
                    experiencia única y cautivadora para su público.</p>
                </div>
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699668790/NicoLivingStereo/81022636_128021368307332_5612966744073365906_n_x3vvh8_1_m6vaud.jpg"
                  alt="img 3"
                />

                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    promesa emergente
                   
                  </h2>
                  <p className="text-block__p"> Con su pasión por la música, su dedicación a la perfección
                    sonora y su búsqueda constante de generar diversos climas y
                    momentos, Snow está consolidando su nombre como una promesa
                    emergente en la escena de la música electrónica.</p>
                </div>
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699668792/NicoLivingStereo/DSC03968_eomx0l_2_j3owsf.jpg"
                  alt="img ultima "
                />
              </div>
              <div data-speed="1.1" className="gallery__right">
                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    Nicolas Nieves, conocido como “Snow”, es un talentoso DJ de
                    Progressive House originario de la ciudad de La Plata
                   
                    
                  </h2>
                  <p className="text-block__p">Desde temprana edad, ha sido influenciado por bandas
                    icónicas como Pink Floyd, Led Zeppelin y Radiohead, lo que
                    ha moldeado su estilo musical único.</p>
                </div>
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698273413/NicoLivingStereo/DSC03962_qdyakp.jpg"
                  alt="img2"
                />
                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    Influencia en su estilo
                    
                  </h2>
                  <p className="text-block__p">Hernan Cattaneo, John Digweed, Sasha y Nick Warren son
                    algunos de los artistas que han influido en el estilo y
                    enfoque musical de Snow. Estos referentes han dejado una
                    huella profunda en su desarrollo artístico.</p>
                </div>
                <img
                  className="gallery__item"
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698271984/NicoLivingStereo/IMG_2949_kctprk.jpg"
                  alt="img4"
                />

                <div className="text-block gallery__item">
                  <h2 className="text-block__h">
                    Su Enegira En el ESCENARIO
                  </h2>
                  <p className="text-block__p">Su energía en el escenario y su capacidad para transportar a
                    la audiencia a través de sonidos cautivadores son sin duda
                    una experiencia creativa e innovadora para cualquier
                    audiencia.</p>
                </div>
              </div>
            </div>
            
          </div>
          <div className="redesnico">
            <div className="redesnico">
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
      <div className="artistas1"><h1>Artistas</h1></div>
      <div className="sliderBiografias"><SliderSection/></div>
    </div>
    </div>
  );
}

export default NicolasNieves;
