import React from 'react';
import './redes.css';
const Redes = () => {
    return (
        <div>
             <div>
        <div className="redes">
          <h1>Escuchalos en sus redes</h1>
        </div>
      </div>
      <div className="redes-icons">
        <a
          href="https://soundcloud.com/living-stereo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110274/soundcloud_sj9krx.png"
            alt="SoundCloud"
            className="small-image"
          />
        </a>
        <a
          href="https://open.spotify.com/album/3MC0Gx6ZFBbNZxxLcI2fHK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110079/spotify_hl3rka.png"
            alt="Spotify"
            className="small-image"
          />
        </a>
        <a
          href="https://www.instagram.com/living.stereo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110078/instagram_pmiidc.png"
            alt="Insta"
            className="small-image"
          />
        </a>
        <a
          href="https://www.youtube.com/watch?v=C3eUu7bo3hw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698110077/youtube_tuqwvh.png"
            alt="YouTube"
            className="small-image"
          />
        </a>
      </div>
        </div>
    );
};

export default Redes;