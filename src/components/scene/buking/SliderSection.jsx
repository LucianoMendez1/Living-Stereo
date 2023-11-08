import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sliderSection.css";

const SliderSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageURL) => {
    setSelectedImage(imageURL);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="container2">
        <div className="row">
          <div className="column2">
            <Link to="/biografias/NicolasNieves" onClick={scrollToTop}>
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698269632/NicoLivingStereo/recortado.jpg"
                alt="Imagen 2"
                loading="lazy"
              ></img>
            </Link>
            <div className="name">
              <h1>Nicolas Nieves</h1>
            </div>
          </div>
          <div className="column2">
            <Link to="/biografias/AgustinBragoni" onClick={scrollToTop}>
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697749878/Agustin_Bragoni_-_Chacra_el_Descanso_2_wv4ttr.jpg"
                alt="Imagen 2"
                loading="lazy"
              ></img>
            </Link>
            <div className="name">
              <h1>Agustin Bragoni</h1>
            </div>
          </div>
          <div className="column2">
            <Link to="/biografias/B2B" onClick={scrollToTop}>
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699070017/agus_wcke3d_kc8s1k.jpg"
                alt="Imagen 4"
                loading="lazy"
              ></img>
            </Link>
            <div className="name">
              <h1>B2B Bragoni Di Marzio</h1>
            </div>
          </div>
          <div className="column2">
            <Link to="/biografias/SimonDimarzio" onClick={scrollToTop}>
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698269867/NicoLivingStereo/tr_yw4d9c.jpg"
                alt="Imagen 3"
                loading="lazy"
              ></img>
            </Link>
            <div className="name">
              <h1>Simon Di Marzio</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
