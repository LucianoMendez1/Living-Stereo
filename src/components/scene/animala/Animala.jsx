import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./animala.css";

const Animala = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textBlocks = document.querySelectorAll(".bio-text-animala"); // Cambiado a ".bio-text-animala"
    textBlocks.forEach((textBlock) => {
      gsap.fromTo(
        textBlock,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: textBlock,
            start: "top 80%",
            end: "center bottom",
            scrub: true,
          },
        }
      );
    });

    const images = document.querySelectorAll(".bio-image-animala"); // Cambiado a ".bio-image-animala"
    images.forEach((image) => {
      const staticImg = image.querySelector(".bio-image-static-animala"); // Cambiado a ".bio-image-static-animala"
      const staticImg2 = image.querySelector(".bio-image-static2-animala"); // Cambiado a ".bio-image-static2-animala"
      const staticImg3 = image.querySelector(".bio-image-static3-animala"); // Cambiado a ".bio-image-static3-animala"

      gsap.fromTo(
        staticImg,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        staticImg2,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        staticImg3,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
    });

    gsap.fromTo(
      ".section2-animala", // Cambiado a ".section2-animala"
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".section2-animala", // Cambiado a ".section2-animala"
          start: "top center",
          end: "center center",
          scrub: true,
        },
      }
    );
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
                    Animala
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
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697951743/Animala/350271788_563412029304349_3884554252112040800_n_j4slng.jpg"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animala;
