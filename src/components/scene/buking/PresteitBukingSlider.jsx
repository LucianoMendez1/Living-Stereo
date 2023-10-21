import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SliderSection from "../buking/SliderSection";
import "../buking/sliderSection.css";
import "../buking/presteitbuking.css";

const PresteitBukingSlider = () => {
  const [currentBackgroundVideoBuking] = useState(
    "https://res.cloudinary.com/dvnhn35l4/video/upload/v1697516947/46EEF93D-F18F-41C0-B859-F0EB4A775B95_1_gcvnyh.mov"
  );
  const videoRef = useRef(null);
  const titulopresteitRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const titulopresteit = titulopresteitRef.current;
    const scrollTriggerContainer = document.querySelector(".home-container");

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(titulopresteit, {
      scrollTrigger: {
        trigger: titulopresteit,
        start: "top bottom",
      },
      opacity: 1,
      y: 0,
      duration: 1.5,
    });
  }, []);

  return (
    <div className="home-container">
      <div className="start-screen">
        <div className="start-content1">
          <div className="titulopresteit">
            <span>Press Kit Booking</span>
            <h6 className="subtitle1">Conoce a los artistas detras de Living Stereo</h6>
          </div>
          <SliderSection />
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="background-videoBuking"
          >
            <source src={currentBackgroundVideoBuking} type="video/mp4" />
            Tu navegador no admite el elemento de videos.
          </video>
        </div>
      </div>
    </div>
  );
}

export default PresteitBukingSlider;
