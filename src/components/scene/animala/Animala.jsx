import React, { useEffect, useState } from "react";

import "./animala.css";

const Animala = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 550) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="container_animala">
      <div className="box_text_animala">
        <h2>Living Stereo Showcase</h2>
        <p>
          {" "}
          En 2023, se convirtió en un lugar emocionante para{" "}
          <span className="highlighted-text">500 personas. </span>
          Conocido por su música innovadora y apoyo a talentos locales, lo que
          ha dejado una marca importante en la escena musical.
        </p>
      </div>

      {isMobile ? (
        <div className="box_video">
          <video
            className="video_animala_mobile"
            autoPlay
            loop
            muted
            playsInline
            src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1696907149/ProyectAgustin/2_gtnfou.mp4"
          ></video>
        </div>

      ) : (
        <div className="box_img_animala">
          <img
            className="img_animala img_1" // Cambiado a ".bio-image-static-animala"
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1702862586/livingStereo-Optimizado/animala/349575254_1452085322226359_8168062326411260196_n_zl5jog_ow2qqq.jpg"
            alt="Image 1"
          />
          <img
            className="img_animala img_2" // Cambiado a ".bio-image-static2-animala"
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1702862589/livingStereo-Optimizado/animala/PHOTO-2023-05-18-15-22-47_2_t18qgl_r5yl17.jpg "
            alt="image 2"
          />
          <img
            className="img_animala img_3" // Cambiado a ".bio-image-static3-animala"
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1702862585/livingStereo-Optimizado/animala/350091469_771875407930011_1637485298770860654_n_mwasyp_xcbd93.jpg"
            alt="Image 3"
          />
          <img
            className="img_animala img_4" // Cambiado a ".bio-image-static3-animala"
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1702862590/livingStereo-Optimizado/animala/4c24c54f-ec80-4e18-b996-db4ce2302057_zqc63b_1_lalbh8.jpg"
            alt="Image 4"
          />
          <img
            className="img_animala img_5" // Cambiado a ".bio-image-static3-animala"
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1702862587/livingStereo-Optimizado/animala/350271788_563412029304349_3884554252112040800_n_j4slng_auewll.jpg"
            alt="Image 5"
          />
          <img
            className="img_animala img_6" // Cambiado a ".bio-image-static3-animala"
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1702862589/livingStereo-Optimizado/animala/IMG_2938_xziijt_fip4e3.jpg"
            alt="Image 6"
          />
        </div>
      )}
    </div>
  );
};

export default Animala;

/* 

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
                      para <span className="highlighted-text">500 personas. </span><br/><br/> Conocido por su música innovadora y
                      apoyo a talentos locales, lo que ha dejado una marca
                      importante en la escena musical.

                    </div>
                  </h2>
                  <video
                    className="bio-video-animala"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1696907149/ProyectAgustin/2_gtnfou.mp4"
                  ></video>

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
*/
