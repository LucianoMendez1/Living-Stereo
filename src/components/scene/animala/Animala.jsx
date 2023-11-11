import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import isMobile from 'is-mobile';
import "./animala.css";

const Animala = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!isMobile()) {
      // Solo activar animaciones en pantallas más grandes

      gsap.fromTo(
        ".animala-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".animala-item",
            start: "top 80%",
            end: "center bottom",
            scrub: true,
          },
        }
      );

      // Agrega más animaciones si es necesario
    }
  }, []);


  return (
    <div className="bio-wrapper-animala">
      <div className="bio-content-animala">
        <div className="bio-portfolio-animala">
          <div className="bio-container-animala">
            <div className="bio-gallery-animala">
              <div className="bio-item-animala">
                <div className="bio-text-animala">
                  <h2 className="bio-animala">
                    <div className="title"><h2>Animala</h2></div>
                    <div className="bio-text-animala">
                      En 2023, se convirtió en un lugar emocionante
                      para 500 personas, conocido por su música innovadora y
                      apoyo a talentos locales, lo que ha dejado una marca
                      importante en la escena musical.

                      <span className="highlighted-text-animala">

                      </span>

                    </div>
                  </h2>
                </div>
             
              </div>
              <div className="bio-item-animala"> 
                <div className="bio-image-animala"> 
                  <img
                    className="bio-image-static-animala" // Cambiado a ".bio-image-static-animala"
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697951746/Animala/349575254_1452085322226359_8168062326411260196_n_zl5jog.jpg"
                    alt="Image 1"
                  />
                </div>
              </div>
              <div className="bio-item-animala"> 
                <div className="bio-image-animala">
                  <img
                    className="bio-image-static2-animala" // Cambiado a ".bio-image-static2-animala"
                   /*  https://res.cloudinary.com/dvnhn35l4/image/upload/v1699064819/PHOTO-2023-05-18-15-22-47_2_t18qgl.jpg */
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699064819/PHOTO-2023-05-18-15-22-47_2_t18qgl.jpg "
                    alt="image 2"
                  />
                </div>
              </div>
              <div className="bio-item-animala"> 
                <div className="bio-image-animala">
                  <img
                    className="bio-image-static3-animala" // Cambiado a ".bio-image-static3-animala"
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697951745/Animala/350091469_771875407930011_1637485298770860654_n_mwasyp.jpg"
                    alt="Image 3"
                  />
                </div>
              </div>
              <div className="bio-item-animala"> 
                <div className="bio-image-animala">
                  <img
                    className="bio-image-static4-animala" // Cambiado a ".bio-image-static3-animala"
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699064819/4c24c54f-ec80-4e18-b996-db4ce2302057_zqc63b.jpg"
                    alt="Image 4"
                  />
                </div>
              </div>
              <div className="bio-item-animala"> 
                <div className="bio-image-animala">
                  <img
                    className="bio-image-static5-animala" // Cambiado a ".bio-image-static3-animala"
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697951743/Animala/350271788_563412029304349_3884554252112040800_n_j4slng.jpg"
                    alt="Image 5"
                  />
                </div>
              </div>
              <div className="bio-item-animala"> 
                <div className="bio-image-animala">
                  <img
                    className="bio-image-static6-animala" // Cambiado a ".bio-image-static3-animala"
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698271045/NicoLivingStereo/IMG_2938_xziijt.jpg"
                    alt="Image 6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animala;
