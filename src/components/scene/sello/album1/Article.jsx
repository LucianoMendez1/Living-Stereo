import "./Article.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Article = ({
  imgSrc,
  id,
  desc,
  title,
  data_index,
  data_status,
  handleLeftClick,
  handleRightClick,
  button_error,
  audioSrc,
}) => {
  const [isPlaying, setPlaying] = useState(false);
  const audioRef = React.createRef();

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!isPlaying);
  };

  return (
    <article
      className="article"
      id={id}
      data_index={data_index}
      data_status={data_status}
    >
      <div className="article__section">
        <div
          className="article__section__image"
          style={{ backgroundImage: `url(${imgSrc})` }}
        ></div>
      </div>
      <div className="article__section">
        <div className="article__section__description">{desc}</div>
      </div>
      <div className="article__section">
        <div className="article__section__title">
          <h2>{title}</h2>
          <button
            className="article__section__title__play-button"
            onClick={togglePlay}
          >
            <FontAwesomeIcon
              id="FontAwesomeIcon"
              icon={isPlaying ? faPause : faPlay}
            />
          </button>
        </div>
      </div>
      <div className="article__section">
        <div className="article__section__nav">
          <button
            type="button"
            onClick={handleLeftClick}
          >
            <FontAwesomeIcon id="FontAwesomeIcon" icon={faArrowLeftLong} />
          </button>
          <button
            type="button"
            onClick={handleRightClick}
          >
            <FontAwesomeIcon id="FontAwesomeIcon" icon={faArrowRightLong} />
          </button>
        </div>
      </div>
      <div className="article__section">
        <audio ref={audioRef} src={audioSrc} type="audio/mp3" />
      </div>
    </article>
  );
};

export default Article;
