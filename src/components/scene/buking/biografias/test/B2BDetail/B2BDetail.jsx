import React, { useEffect } from "react";
import "../../styles/biography.css";
import HeroDetail from "../components/hero/HeroDetail";
import DescriptionDetail from "../components/description/DescriptionDetail";
import BookDetail from "../components/book/BookDetail";
import VideoDetail from "../components/videoDetail/VideoDetail";
import TecnicoRider from "../components/rider/TecnicoRider";

const B2BDetail = () => {


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
        name={"B2B "}
        img={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1699064833/IMG_3719_cwenly.jpg"
        }
      />

      <DescriptionDetail
        title1={
          "Agustín Bragoni y Simón di Marzio, dos apasionados de la música electrónica"
        }
        text1={
          "Han dejado una huella indeleble en la escena musical argentina con sus contribuciones únicas y su dedicación inquebrantable. Juntos, representan la fusión de talento, versatilidad y una profunda conexión con la música desde edades tempranas."
        }
        img1={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071423/b2bAgusSimon/CB6AD92B-1BBF-46DA-8D21-92F6A3807A9C_poodip.jpg"
        }
        title2={
          "Su camino en los escenarios."
        }
        text2={
          "La colaboración entre estos dos artistas va más allá de la mezcla de sonidos. Juntos, han explorado el género House, compartiendo escenario con reconocidos nombres como Kolombo y Nic Fanciulli. Su incursión en nuevas fronteras musicales evidencia no solo su versatilidad sino también su influencia en la evolución de la música electrónica en Argentina."
        }
        img2={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071417/b2bAgusSimon/651c4a28-b78c-40c5-905b-a1d18220e3d4_wojmgp.jpg"
        }
        title3={"Agustín Bragoni es un Explorador Musical desde la Infancia "}
        text3={
          "músico y productor argentino, dio sus primeros pasos en el mundo de la música a la temprana edad de 5 años. Con una destreza innata para la guitarra y una afinidad por los sintetizadores, Bragoni se ha destacado en la escena electrónica argentina. Su versatilidad en géneros como Progressive House y Melodic Techno lo ha llevado a conquistar  y colaborar en la producción musical de reconocidos artistas locales.  Ha compartido la cabina con destacados DJs de la escena argentina, como Mariano Mellino, Juan Hansen, Soundexile, Ezequiel Arias y Jonh Cosani, además de colaborar con artistas internacionales como Cid Inc y Einmusik."
        }
        img3={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071423/b2bAgusSimon/CB8454FB-CB06-45B8-B2BB-DD8605EE7307_1_mri4fo.jpg"
        }
        title4={
          "Simón di Marzio, músico y productor de La Plata, Argentina."
        }
        text4={
          " se adentró en el mundo de la música inspirado por grandes referentes como The Chemical Brothers y Hernan Cattaneo. Hace aproximadamente 6 años, marcó el inicio de su carrera en la escena electrónica, destacándose por transiciones armónicas y sonidos cautivadores. Como DJ residente en Iconic Club, ha dejado una huella sonora única, contribuyendo al pulso de la noche platense. Su incursión en la producción musical le valió el respaldo de Hernán Cattaneo en su podcast semanal Residente. La habilidad de Simón para crear atmósferas envolventes y su identificación con géneros como Progressive House, Deep House y Organic House lo han convertido en una figura respetada en la escena musical argentina. A lo largo de su trayectoria, Simón di Marzio ha compartido la cabina con diversos artistas destacados,Su visión única y su constante exploración de nuevos sonidos lo posicionan como un talento en ascenso en la escena electrónica argentina."
        }
        img4={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071425/b2bAgusSimon/f7b52ae3-ad22-4702-999b-35610a63c349_tprk0m.jpg"
        }
        title5={
          "Compartieron cabina con los DJs más importantes de la escena argentina."
        }
        text5={
          "Compartiendo cabina con Kolombo, Mariano Mellino, Nic Fanciulli, Juan Hansen, Soundexile, Ezequiel Arias y Jonh Cosani entre otros. Demostrando así su versatilidad dentro la escena electrónica. Algunas de sus fechas más destacadas han sido junto a al DJ internacional Cid Inc en Estadio Uno (Club Estudiantes) y junto al alemán Einmusik en Iconic Club."
        }
        img5={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071424/b2bAgusSimon/D870221E-7541-4B81-A3CE-79E1D58BC806_1_x3ztns.jpg"
        }
      />

      <BookDetail arrBook={arrBook} />

     {/*  <VideoDetail 
        name={'B2B Bragoni y Di Marzio'}
        video={'https://res.cloudinary.com/dvnhn35l4/video/upload/v1697501262/parabiografia_cprtlw.mp4'}
      /> */}

      <TecnicoRider/>

    </div>
  );
};

export default B2BDetail