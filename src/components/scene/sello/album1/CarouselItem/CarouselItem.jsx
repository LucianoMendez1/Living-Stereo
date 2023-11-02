import React from "react";
import PropTypes from "prop-types";
import * as styles from "./CarouselItem.module.css";
import "./CarouselItem.module.css";

function CarouselItem({
  onNavigate,
  text,
  title,
  srcLink,
  audioRef,
  music,
  handlePlay,
}) {
  const navigate = (direction) => {
    onNavigate && onNavigate(direction);
  };

  return (
    <div className={`${styles.carousel}`}>
      <div className={`${styles.picture}`}>
        <img src={srcLink} alt={title} />
      </div>
      <div className={`${styles.description}`} onClick={handlePlay}>
      <audio
  className={styles.boxMusicliving} // Modificamos la clase aquí
  ref={audioRef}
  src={music}
></audio>


        <p>{text}</p>
      </div>
      <div className={`${styles.title} ${styles.effectTitle}`} id="title">
        <div className={`${styles.thing} ${styles.effectTitle}`}>
          <h1 className={styles.effectTitle}>
            <br />
            South America
            <br />
            <br />
            {title}
          </h1>
          <h1 className={styles.effectTitle}>
            <br />
          </h1>
        </div>
      </div>
      <div className={`${styles.controls}`}>
        <button type="button" onClick={() => navigate("left")}>
          <img
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698708720/arrow_left_icon_133703_kxlsuk.png"
            alt="left"
            height="50px"
            width="50px"
            className={`${styles.invertColor} ${styles.invert}`}
          />
        </button>
        <button type="button" onClick={() => navigate("right")}>
          <img
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698708753/arrow_right_icon_133703_eqn4rt.png"
            alt="right"
            height="50px"
            width="50px"
            className={`${styles.invertColor}`}
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
