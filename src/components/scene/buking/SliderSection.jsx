import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para crear enlaces
import './sliderSection.css';

const SliderSection = () => {
  const [imageClicked, setImageClicked] = useState(false);

  const handleClickImage2 = () => {
    // Cuando se hace clic en la imagen 2, cambia el estado a true
    setImageClicked(true);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0); // Desplázate al principio de la página
  };

  return (
    <div>
      <div className="container2">
        <div className="row">
          <div className="column2">
            
            <img
              src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697588305/79536479_556673211579065_5494554745452327860_n_mjutxx.jpg"
              alt="Imagen 1"
            ></img>
            <div className="name"><h1>Nicolas Nieves</h1></div>
          </div>
          <div className="column2">
            {imageClicked ? (
              // Si la imagen 2 ha sido clicada, redirige a la sección de destino
              <Link to="/biografias/AgustinBragoni" onClick={scrollToTop}>
                <img
                  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697749878/Agustin_Bragoni_-_Chacra_el_Descanso_2_wv4ttr.jpg"
                  alt="Imagen 2"
                ></img>
              </Link>
            ) : (
              // Si no ha sido clicada, muestra la imagen 2 normal
              <img
                src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697749878/Agustin_Bragoni_-_Chacra_el_Descanso_2_wv4ttr.jpg"
                alt="Imagen 2"
                onClick={handleClickImage2}
              ></img>
              
            )}
            <div className="name"><h1>Agustin Bragoni</h1></div>
          </div>
          <div className="column2">
            <img
              src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697862792/10-DSC05673_fdwtd1.jpg"
              alt="Imagen 3"
            ></img>
           <div className="name"><h1>Simon Dimarzio</h1></div>
          </div>
        </div>
      </div>

      {/* Sección de destino */}
      <section id="seccionDestino">
        {/* Contenido de la sección de destino */}
      </section>
    </div>
  );
};

export default SliderSection;
