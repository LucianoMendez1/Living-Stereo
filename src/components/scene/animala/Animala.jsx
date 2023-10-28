import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./animala.css";

const Animala = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textBlocks = document.querySelectorAll(".bio-text");
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

    const images = document.querySelectorAll(".bio-image");
    images.forEach((image) => {
      const staticImg = image.querySelector(".bio-image-static");
      const staticImg2 = image.querySelector(".bio-image-static2");
      const staticImg3 = image.querySelector(".bio-image-static3");

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
    <div className="bio-wrapper">
      <div className="bio-content">
        <div className="bio-portfolio">
          <div className="bio-container">
            <div className="bio-gallery">
              <div className="bio-item">
                <div className="bio-text">
                  <h2 className="bio-animala">
                    Animala
                    <div className="bio-text-animala">
                      En 2023, se convirtió en un lugar emocionante
                      para 500 personas, conocido por su música innovadora y
                      apoyo a talentos locales, lo que ha dejado una marca
                      importante en la escena musical.
                      
                      <span className="highlighted-text">
                      
                      </span>
                    
                    </div>
                  </h2>
                </div>
              </div>
              <div className="bio-item">
                <div className="bio-image">
                  <img
                    className="bio-image-static"
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697951746/Animala/349575254_1452085322226359_8168062326411260196_n_zl5jog.jpg"
                    alt="Image 1"
                  />
                </div>
              </div>
              <div className="bio-item">
                <div className="bio-image">
                  <img
                    className="bio-image-static2"
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697951743/Animala/350271788_563412029304349_3884554252112040800_n_j4slng.jpg"
                    alt="image 2"
                  />
                </div>
              </div>
              <div className="bio-item">
                <div className="bio-image">
                  <img
                    className="bio-image-static3"
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
