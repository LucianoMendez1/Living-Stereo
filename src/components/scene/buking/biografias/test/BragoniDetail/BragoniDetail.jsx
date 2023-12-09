import React from "react";
import "../../styles/biography.css";
import HeroDetail from "../components/hero/HeroDetail";
import DescriptionDetail from "../components/description/DescriptionDetail";
import BookDetail from "../components/book/BookDetail";
import VideoDetail from "../components/videoDetail/VideoDetail";
import AgustinBragoni from "../../AgustinBragoni/AgustinBragoni";

const BragoniDetail = () => {


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
      <HeroDetail
        name={"Agustin Bragoni"}
        img={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1697749878/Agustin_Bragoni_-_Chacra_el_Descanso_2_wv4ttr.jpg"
        }
      />

      <DescriptionDetail
        title1={
          "Agustin Bragoni, es un musico productor, que dedicó toda su vida a la música desde los 5 años."
        }
        text1={
          "Actualmente se desempeña en la electrónica (Progressive House, Melodic Techno & Melodic House). Con sus dos formatos, DJ Set y Live Set, tocando instrumentos como la guitarra, sintetizadores y lap steel."
        }
        img1={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1697749878/Agustin_Bragoni_-_Chacra_el_Descanso_oyat3i.jpg"
        }
        title2={
          "A lo largo de su carrera ha logrado tocar en los escenarios más reconocidos de Argentina."
        }
        text2={
          "Como el Lollapalooza, Luna Park, Cosquin Rock, Estadio Malvinas Argentinas, entre otros."
        }
        img2={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1697754573/Agus_Chano_-_Luna_Park_wfhjea.jpg"
        }
        title3={"Así mismo, además de su proyecto como DJ. "}
        text3={
          "Es parte del equipo de producción y musicalización de Chano, un exponente dentro de la música."
        }
        img3={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1697755160/Agustin_Bragoni_2_nmghmd.jpg"
        }
        title4={
          "Por su parte es productor musical y DJ residente de Iconic Club."
        }
        text4={
          "En los últimos tiempos, ha tenido la oportunidad de incursionar dentro del género House."
        }
        img4={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1697749878/Agustin_Bragoni_-_Estadio_UNO_o3lsyx.jpg"
        }
        title5={
          "Compartio cabina con los DJs más importantes de la escena argentina."
        }
        text5={
          "Compartiendo cabina con Kolombo, Mariano Mellino, Nic Fanciulli, Juan Hansen, Soundexile, Ezequiel Arias y Jonh Cosani entre otros. Demostrando así su versatilidad dentro la escena electrónica. Algunas de sus fechas más destacadas han sido junto a al DJ internacional Cid Inc en Estadio Uno (Club Estudiantes) y junto al alemán Einmusik en Iconic Club."
        }
        img5={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1697749878/Agustin_Bragoni_-_Estadio_UNO_3_akmaxf.jpg"
        }
      />

      <BookDetail arrBook={arrBook} />

      <VideoDetail 
        name={'Agustin Bragoni'}
        video={'https://res.cloudinary.com/dvnhn35l4/video/upload/v1697392290/Agustin_Bragoni_-_Living_Stereo_Session_1_1080p_ug5zqm.mp4'}
      />

    </div>
  );
};

export default BragoniDetail;
