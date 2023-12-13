import React, { useEffect } from "react";
import "../../styles/biography.css";
import HeroDetail from "../components/hero/HeroDetail";
import DescriptionDetail from "../components/description/DescriptionDetail";
import BookDetail from "../components/book/BookDetail";
import VideoDetail from "../components/videoDetail/VideoDetail";
import TecnicoRider from "../components/rider/TecnicoRider";

const NicolasDetail = () => {

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
      <HeroDetail
        name={"Nicolas Nieves"}
        img={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1698269513/NicoLivingStereo/IMG_6275_vahtzr.jpg"
        }
      />

      <DescriptionDetail
        title1={
          " Nicolas Nieves es un talentoso DJ de Progressive House originario de la ciudad de La Plata"
        }
        text1={
          "Desde temprana edad, ha sido influenciado por banda sicónicas como Pink Floyd, Led Zeppelin y Radiohead, lo que ha moldeado su estilo musical único."
        }
        img1={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1699668791/NicoLivingStereo/Copia_de_NGR04472_m5vuby_1_sqjsdk.jpg"
        }
        title2={
          " Influencia en su estilo."
        }
        text2={
          "Hernan Cattaneo, John Digweed, Sasha y Nick Warren son algunos de los artistas que han influido en el estilo y enfoque musical de Snow. Estos referentes han dejado una huella profunda en su desarrollo artístico."
        }
        img2={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1698273411/NicoLivingStereo/DSC03960_bxewii.jpg"
        }
        title3={" Su Energia en el Escenario "}
        text3={
          "su capacidad para transportar a la audiencia a través de sonidos cautivadores son sin duda una experiencia creativa e innovadora para cualquier audiencia"
        }
        img3={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1699668790/NicoLivingStereo/81022636_128021368307332_5612966744073365906_n_x3vvh8_1_m6vaud.jpg"
        }
        title4={
          "promesa emergente"
        }
        text4={
          "Con su pasión por la música, su dedicación a la perfección sonora y su búsqueda constante de generar diversos climas y, Snow está consolidando su nombre como una promesa emergente en la escena de la música electrónica"
        }
        img4={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1699668792/NicoLivingStereo/DSC03968_eomx0l_2_j3owsf.jpg"
        }
        title5={
          "Compartio cabina con los DJs más importantes de la escena argentina."
        }
        text5={
          "Compartiendo cabina con Kolombo, Mariano Mellino, Nic Fanciulli, Juan Hansen, Soundexile, Ezequiel Arias y Jonh Cosani entre otros. Demostrando así su versatilidad dentro la escena electrónica. Algunas de sus fechas más destacadas han sido junto a al DJ internacional Cid Inc en Estadio Uno (Club Estudiantes) y junto al alemán Einmusik en Iconic Club."
        }
        img5={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1698272645/NicoLivingStereo/58409900_466901200716628_5467733535520079848_n_fhtjs4.jpg"
        }
      />

      {/* <BookDetail arrBook={arrBook} /> */}

     

      <TecnicoRider/>

    </div>
  );
};
 

export default NicolasDetail