import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sliderSection.css';

const SliderSection = () => {
  const [imageClicked, setImageClicked] = useState(false);
  const [imageClicked2, setImageClicked2] = useState(false);
  const [imageClicked3, setImageClicked3] = useState(false);

  const handleClickImage1 = () => {
    setImageClicked(true);
  }; 

  const handleClickImage2 = () => {
    setImageClicked(true);
  };

  const handleClickImage3 = () => {
    setImageClicked3(true);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="container2">
        <div className="row">
          <div className="column2">
          {imageClicked ? (
              <Link to="./biografias/NicolasNieves" onClick={scrollToTop}>
                <img
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698269632/NicoLivingStereo/recortado.jpg"
                  alt="Imagen 2"
                ></img>
              </Link>
            ) : (
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698269632/NicoLivingStereo/recortado.jpg"
                alt="Imagen 2"
                onClick={handleClickImage2}
              ></img>
            )}
            <div className="name">
              <h1>Nicolas Nieves</h1>
            </div>
          </div>
          <div className="column2">
            {imageClicked ? (
              <Link to="./biografias/AgustinBragoni" onClick={scrollToTop}>
                <img
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697749878/Agustin_Bragoni_-_Chacra_el_Descanso_2_wv4ttr.jpg"
                  alt="Imagen 2"
                ></img>
              </Link>
            ) : (
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697749878/Agustin_Bragoni_-_Chacra_el_Descanso_2_wv4ttr.jpg"
                alt="Imagen 2"
                onClick={handleClickImage2}
              ></img>
            )}
            <div className="name">
              <h1>Agustin Bragoni</h1>
            </div>
          </div>
          <div className="column2">
            {imageClicked3 ? (
              <Link to="./biografias/SimonDimarzio" onClick={scrollToTop}>
                <img
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698269867/NicoLivingStereo/tr_yw4d9c.jpg"
                  alt="Imagen 3"
                ></img>
              </Link>
            ) : (
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698269867/NicoLivingStereo/tr_yw4d9c.jpg"
                alt="Imagen 3"
                onClick={handleClickImage3}
              ></img>
            )}
            <div className="name">
              <h1>Simon Dimarzio</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
