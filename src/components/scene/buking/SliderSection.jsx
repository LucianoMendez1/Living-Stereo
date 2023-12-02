import React, { useState, useEffect , useRef } from "react";
import { Link } from "react-router-dom";
import "./sliderSection.css";
import { gsap } from 'gsap/all'
import { ScrollTrigger } from 'gsap/all'
import { Power4 } from 'gsap'

const SliderSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  const book = useRef(null)

  useEffect(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: book.current,
          start: 'top 50%',
        },
      });

      tl.fromTo(
        '.myPath',
        {
          opacity:0,
        },
        {
          duration: .5, 
          strokeDashoffset: 0, 
          ease: "linear", 
          opacity:1,
        },
      );


  },[])  

  return (

    <div className="contain_book" ref={book}>
        <div className="box_svg">
            <svg width="303" height="221" viewBox="0 0 233 121" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1C24.1778 10.741 47.0701 20.9782 69.1085 33.1274C92.4583 45.9995 115.893 61.3548 132.06 83.0048C137.065 89.7066 142.941 98.5964 142.819 107.411C142.742 112.934 135.615 117.475 131.082 118.815C123.229 121.138 113.118 119.82 105.652 116.818C99.8574 114.489 89.8256 108.254 89.8256 100.977C89.8256 88.2399 117.102 86.4402 124.369 85.6229C160.566 81.5519 197.278 87.3847 232 97.3822"
                stroke="#c90000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="399"
                strokeDashoffset="399"
                className='myPath'
              ></path>
            </svg>
        </div>
      <div className="gallery_contain" id='artist'>
          <div className="box_title_booking">
              <h1>Press kit booking. </h1>
              <p>Conocé a los artistas detras de Living Stereo.</p>
          </div>

          <section className='section_gallery'>
              <section className="image-container">
                  <img className='simonImg' src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698269867/NicoLivingStereo/tr_yw4d9c.jpg" alt="Nico Img" />
                  <div className="image-name">Simon Di Marzio</div>
              </section>
              <section className="image-container">
                  <img src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697749878/Agustin_Bragoni_-_Chacra_el_Descanso_2_wv4ttr.jpg" alt="Agus Img" />
                  <div className="image-name">Agustin Bragoni</div>
              </section>
              <section className="image-container">
                  <img className='joaquinImg' src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698269632/NicoLivingStereo/recortado.jpg" alt="Agus Img" />
                  <div className="image-name">Joaquin Irigoyen</div>
              </section>
          
              <section className="image-container">
                  <img  src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699064833/IMG_3719_cwenly.jpg" alt="Agus Img" />
                  <div className="image-name image-name_b2b ">B2B <br />Bragoni <br /> Di Marzio</div>
              </section>
          </section> 
      </div>
    </div>
    
  );
};

export default SliderSection;


/*  <div className="container2">
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
      </div> */