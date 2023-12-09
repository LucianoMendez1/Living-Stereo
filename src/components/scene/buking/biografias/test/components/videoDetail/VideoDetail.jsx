import React from "react";
import "./videoDetail.css";

const VideoDetail = ({ name, video }) => {
  return (
    <div className="container_video_detail">
      <h2>{name}</h2>
      <div className="box_video_detail">
        <video className="" autoPlay loop muted playsInline src={video} />
      </div>

      <div className="box_social_detail">
        <div className="redes_detail_detail">
          <h2>Escuchalos en sus redes</h2>
        </div>
        <div className="redes-icons_detail">
          <a
            href="https://soundcloud.com/agusbragoni/agustin-bragoni-live-ft-simon-di-marzio"
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
            href="https://open.spotify.com/artist/1cULybzKerkCYILQ7HE6KV"
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
            href="https://www.instagram.com/agusbragoni/"
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
            href="https://www.youtube.com/channel/UCiJDFbELenl7792FyRxlGyQ"
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
    </div>
  );
};

export default VideoDetail;
