import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './CarouselItem.module.css';

function CarouselItem({ onNavigate, text, title, srcLink }) {
  const navigate = (direction) => {
    // Llamamos a la función onNavigate si está definida
    onNavigate && onNavigate(direction);
  };

  return (
    <div className={`${styles.carousel}`}>
      <div className={`${styles.picture}`}>
        <img src={srcLink} alt={title} />
      </div>
      <div className={`${styles.description}`}>
        <p>{text}</p>
      </div>
      <div className={`${styles.title} effect-title`} id="title">
        <div className={`${styles.thing} effect-title`}>
          <h1 className="effect-title">
            <br /> 
            South America
            <br /> 
            <br />
            {title} 
          </h1>
          <h1 className="effect-title"><br /></h1>
        </div>
      </div>
      <div className={`${styles.controls}`}>
        <button type="button" onClick={() => navigate('left')}>
          <img
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698708720/arrow_left_icon_133703_kxlsuk.png" // Asegúrate de que la ruta de la imagen sea correcta
            alt="left"
            height="50px"
            width="50px"
            className="invert-color invert"
          />
        </button>
        <button type="button" onClick={() => navigate('right')}>
          <img
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698708753/arrow_right_icon_133703_eqn4rt.png" // Asegúrate de que la ruta de la imagen sea correcta
            alt="right"
            height="50px"
            width="50px"
            className="invert-color"
          />
        </button>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  onNavigate: PropTypes.func,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  srcLink: PropTypes.string.isRequired,
};

export default CarouselItem;
