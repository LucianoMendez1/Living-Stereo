import React, { useEffect } from "react";
import "../../styles/biographypreskit.css";
import HeroDetailpreskit from "../components/hero/HeroDetailPreskit";
import PreskitDescript from "../components/description/PreskitDescript";
import BookDetail from "../components/book/BookDetail";
/* import VideoDetail from "../components/videoDetail/VideoDetail";
import TecnicoRider from "../components/rider/TecnicoRider"; */

const Preskit = () => {


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);


  const arrBook = [
    {
      img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1697850814/agusbragoni/1_7_tdgjte.jpg'
    },
    {
      img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1697851232/agusbragoni/alemna_v6rqni.jpg'
    },
    {
      img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1697849793/agusbragoni/259816088_492493538611125_1617444028955560743_n_zesqyp.jpg'
    },
    {
      img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1697850814/agusbragoni/1_8_lgcr6g.jpg'
    },
    {
      img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1697850814/agusbragoni/1_9_ixhipj.jpg'
    },
    {
      img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1697850801/agusbragoni/1_3_kwe0yk.jpg'
    },
    {
      img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1697850812/agusbragoni/1_5_v5sldy.jpg'
    },
    {
      img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1697849794/agusbragoni/258850834_648713199833873_412253203610088041_n_iq4ixd.jpg'
    },
    {
      img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1697850813/agusbragoni/1_6_ohzbo9.jpg'
    },
  ]

  
  return (
    <div className="container_hero">
      <HeroDetailpreskit
        name={"Living Stereo"}
        img={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1714610059/livingStereo-Optimizado/JPG_jiaqza_hqzph7.jpg"
        }
      />

      <PreskitDescript
        title1={
          "Living Stereo es una banda de música electrónica"
        }
        text1={
          " Conformada por cuatro integrantes (Agustin Bragoni, Simon Di Marzio, Nicolas Nieves y Joaquin Irigoyen ) los cuales son Productores musicales y DJs  "
        }
        img1={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1714612656/Live_Sets_disponibles_para_escuchar_en_SoundCloud_Link_en_bio._ogbxri.jpg"
        }
        title2={
          "Prensentaciones "
        }
        text2={
          "Durante sus presentaciones, fusionan Dj Sets con elementos en vivo como sintetizadores, guitars, lap steel, voces y percusión electrónica. Actualmente Living Stereo ofrece dos formatos de actuación en vivo: dj set y live band con sintetizadores guitarra y voces en vivo en los cuales. Ambos formatos se destacan por ser íntegramente con música producida por ellos."
        }
        img2={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1714355656/livingStereo-Optimizado/foto-7_pwluzr.jpg"
        }
        title3={"Generos "}
        text3={
          "Living Stereo explora diferentes tipos de generos de los cuales son : Progressive House, Deep House y Techno."
        }
        img3={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1714355015/livingStereo-Optimizado/foto-43_yi5dam.jpg"
        }
        title4={
          "Producion "
        }
        text4={
          "Con una sólida base en producción musical, Living Stereo sigue desarrollando su marca a través de sus presentaciones en vivo las cuales se destacan por ser íntegramente con música propia."
        }
        img4={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1714355012/livingStereo-Optimizado/foto-38_blee4q.jpg"
        }
        title5={
          "RECONOCIMIENTO NACIONAL E INTERNACIONAL"
        }
        text5={
          "Sus Producciones han sido selladas por labels como 3rd Avenue,One of Kind, La Perle Records, Massive Harmony Records, Dopamine White , South America Avenue"
        }
        img5={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1714355010/livingStereo-Optimizado/foto-1_ehyuyj.jpg"
        }
      />

      <BookDetail arrBook={arrBook} />

     {/*  <VideoDetail 
        name={'Agustin Bragoni'}
        video={'https://res.cloudinary.com/dvnhn35l4/video/upload/v1697392290/Agustin_Bragoni_-_Living_Stereo_Session_1_1080p_ug5zqm.mp4'}
      /> */}

   {/*    <TecnicoRider/> */}

    </div>
  );
};

export default Preskit;
